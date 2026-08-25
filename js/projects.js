/* ==========================================================================
   Onda Noturna — Projetos dinâmicos do GitHub (js/projects.js)
   --------------------------------------------------------------------------
   Lista os repositórios PÚBLICOS da organização usando a API pública do
   GitHub. Sem backend, sem chaves de API, sem frameworks.

   Regras definidas por GitHub Topics:
     - "featured"         → entra na seção "Projetos em Destaque"
     - "hidden-from-site" → NÃO aparece no site

   Categorias reconhecidas como filtros:
     music · culture · community · tool · web · app · experimental · archive

   Segurança: TODO dado vindo da API é inserido com createElement/textContent.
   O innerHTML é usado apenas com SVGs fixos e locais (mapa do js/main.js) —
   nunca com conteúdo da API.

   Cache: o resultado fica 10 minutos no localStorage para poupar a cota
   pública da API. Se a rede falhar, usa o último cache salvo antes de
   mostrar erro.
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------------
     Configuração
     ------------------------------------------------------------------------ */
  var API_URL =
    "https://api.github.com/orgs/Onda-Noturna/repos?type=public&sort=updated&direction=desc&per_page=100";

  var TOPIC_HIDDEN = "hidden-from-site";
  var TOPIC_FEATURED = "featured";
  var CACHE_KEY = "onda-gh-repos-cache-v1";
  var CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutos

  var CATEGORY_LABELS = {
    music: "Música",
    culture: "Cultura",
    community: "Comunidade",
    tool: "Ferramenta",
    web: "Web",
    app: "App",
    experimental: "Experimental",
    archive: "Arquivo"
  };

  var state = { filter: "todos" };
  var processed = { featured: [], rest: [] };
  var els = {};

  /* ------------------------------------------------------------------------
     Helpers de DOM
     ------------------------------------------------------------------------ */

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function clear(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
  }

  // Converte um nome de ícone (mapa confiável do js/main.js) em elemento.
  // O innerHTML aqui recebe APENAS string local fixa — nunca dado da API.
  function iconEl(name, size, className) {
    var box = el("span", className || "repo-icon");
    if (typeof window.ondaIconSvg === "function") {
      box.innerHTML = window.ondaIconSvg(name, size || 20);
    }
    box.setAttribute("aria-hidden", "true");
    return box;
  }

  function externalLink(href, label) {
    var link = el("a", null, label);
    link.className = "btn btn-secondary btn-sm";
    link.setAttribute("href", href);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
    return link;
  }

  /* ------------------------------------------------------------------------
     Regras puras sobre os dados da API (funções pequenas e testáveis)
     ------------------------------------------------------------------------ */

  function topicsOf(repo) {
    return Array.isArray(repo.topics) ? repo.topics : [];
  }

  function isVisible(repo) {
    return topicsOf(repo).indexOf(TOPIC_HIDDEN) === -1;
  }

  function isFeatured(repo) {
    return topicsOf(repo).indexOf(TOPIC_FEATURED) !== -1;
  }

  function categoriesOf(repo) {
    return topicsOf(repo).filter(function (topic) {
      return Object.prototype.hasOwnProperty.call(CATEGORY_LABELS, topic);
    });
  }

  function sortByUpdated(list) {
    return list.slice().sort(function (a, b) {
      return new Date(b.updated_at || 0) - new Date(a.updated_at || 0);
    });
  }

  /** Filtra ocultos, separa destaques e ordena por atualização recente. */
  function processRepos(rawList) {
    var featured = [];
    var rest = [];
    rawList.filter(isVisible).forEach(function (repo) {
      (isFeatured(repo) ? featured : rest).push(repo);
    });
    return { featured: sortByUpdated(featured), rest: sortByUpdated(rest) };
  }

  function matchesFilter(repo, filter) {
    return filter === "todos" || categoriesOf(repo).indexOf(filter) !== -1;
  }

  function categoryCounts(list) {
    var counts = {};
    list.forEach(function (repo) {
      categoriesOf(repo).forEach(function (cat) {
        counts[cat] = (counts[cat] || 0) + 1;
      });
    });
    return counts;
  }

  function formatDate(value) {
    if (!value) return "";
    try {
      return new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }).format(new Date(value));
    } catch (err) {
      return "";
    }
  }

  /* ------------------------------------------------------------------------
     Cache leve em localStorage (tolerante a ambientes que bloqueiam)
     ------------------------------------------------------------------------ */

  function readCache(maxAgeMs) {
    try {
      var raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.repos)) return null;
      if (maxAgeMs && Date.now() - parsed.at > maxAgeMs) return null;
      return parsed.repos;
    } catch (err) {
      return null;
    }
  }

  function writeCache(repos) {
    try {
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ at: Date.now(), repos: repos })
      );
    } catch (err) {
      /* sem storage disponível — segue sem cache */
    }
  }

  /* ------------------------------------------------------------------------
     Renderização
     ------------------------------------------------------------------------ */

  function mountEls() {
    els.wrap = document.getElementById("github-repos");
    els.filters = document.getElementById("repo-filters");
    els.featuredWrap = document.getElementById("featured-wrap");
    els.featuredGrid = document.getElementById("featured-grid");
    els.grid = document.getElementById("repos-grid");
    els.loading = document.getElementById("repos-loading");
    els.errorBox = document.getElementById("repos-error");
    els.retry = document.getElementById("repos-retry");
    els.empty = document.getElementById("repos-empty");
    return Boolean(els.wrap && els.filters && els.grid && els.loading);
  }

  /** Constrói um card usando apenas createElement/textContent (seguro). */
  function buildRepoCard(repo) {
    var card = el("article", "card repo-card");

    var head = el("div", "repo-head");
    head.appendChild(iconEl("fork", 20));
    head.appendChild(el("h3", null, repo.name || "projeto"));
    card.appendChild(head);

    card.appendChild(el("p", "repo-desc", repo.description || "Sem descrição."));

    var tags = topicsOf(repo).filter(function (topic) {
      return topic !== TOPIC_FEATURED && topic !== TOPIC_HIDDEN;
    });
    if (tags.length) {
      var tagWrap = el("div", "repo-tags");
      tags.slice(0, 6).forEach(function (tag) {
        tagWrap.appendChild(el("span", "tag-pill", CATEGORY_LABELS[tag] || tag));
      });
      card.appendChild(tagWrap);
    }

    var meta = el("div", "repo-meta");
    if (repo.language) meta.appendChild(el("strong", null, repo.language));
    if (typeof repo.stargazers_count === "number") {
      meta.appendChild(iconEl("star", 14, "meta-star"));
      meta.appendChild(el("span", null, String(repo.stargazers_count)));
    }
    var updated = formatDate(repo.updated_at);
    if (updated) meta.appendChild(el("span", null, "atualizado em " + updated));
    if (meta.childNodes.length) card.appendChild(meta);

    var actions = el("div", "card-actions");
    if (repo.html_url) actions.appendChild(externalLink(repo.html_url, "Ver no GitHub"));
    if (repo.homepage) actions.appendChild(externalLink(repo.homepage, "Homepage"));
    if (actions.childNodes.length) card.appendChild(actions);

    return card;
  }

  function visibleList(list) {
    return list.filter(function (repo) {
      return matchesFilter(repo, state.filter);
    });
  }

  function renderFilters() {
    var all = processed.featured.concat(processed.rest);
    var counts = categoryCounts(all);
    clear(els.filters);

    addChip("todos", "Todos", all.length);
    Object.keys(CATEGORY_LABELS).forEach(function (cat) {
      if (counts[cat]) addChip(cat, CATEGORY_LABELS[cat], counts[cat]);
    });
  }

  function addChip(key, label, count) {
    var chip = el(
      "button",
      "filter-chip" + (state.filter === key ? " active" : ""),
      label + " (" + count + ")"
    );
    chip.type = "button";
    chip.setAttribute("data-filter", key);
    chip.addEventListener("click", function () {
      state.filter = key;
      renderFilters();
      renderLists();
    });
    els.filters.appendChild(chip);
  }

  function renderLists() {
    var featured = visibleList(processed.featured);
    var rest = visibleList(processed.rest);

    clear(els.featuredGrid);
    featured.forEach(function (repo) {
      els.featuredGrid.appendChild(buildRepoCard(repo));
    });
    els.featuredWrap.hidden = featured.length === 0;

    clear(els.grid);
    rest.forEach(function (repo) {
      els.grid.appendChild(buildRepoCard(repo));
    });
    els.grid.hidden = rest.length === 0;

    els.empty.hidden = featured.length + rest.length !== 0;
  }

  /* ------------------------------------------------------------------------
     Estados da interface
     ------------------------------------------------------------------------ */

  function uiLoading() {
    els.loading.hidden = false;
    els.errorBox.hidden = true;
    els.empty.hidden = true;
    els.featuredWrap.hidden = true;
    els.grid.hidden = true;
    clear(els.filters);
    clear(els.featuredGrid);
    clear(els.grid);
  }

  function uiError() {
    els.loading.hidden = true;
    els.errorBox.hidden = false;
    els.empty.hidden = true;
    els.featuredWrap.hidden = true;
    els.grid.hidden = true;
  }

  function uiContent() {
    els.loading.hidden = true;
    els.errorBox.hidden = true;
  }

  /* ------------------------------------------------------------------------
     Carregamento: cache fresco → API → cache antigo → erro
     ------------------------------------------------------------------------ */

  function hydrate(rawList) {
    processed = processRepos(rawList);
    uiContent();
    renderFilters();
    renderLists();
  }

  function fetchRepos() {
    return fetch(API_URL, { headers: { Accept: "application/vnd.github+json" } })
      .then(function (response) {
        if (!response.ok) throw new Error("HTTP " + response.status);
        return response.json();
      })
      .then(function (list) {
        if (!Array.isArray(list)) throw new Error("Resposta inesperada da API");
        writeCache(list);
        return list;
      });
  }

  function load() {
    uiLoading();

    var cached = readCache(CACHE_TTL_MS);
    if (cached) {
      hydrate(cached);
      return;
    }

    fetchRepos()
      .then(hydrate)
      .catch(function () {
        var stale = readCache(0); // aceita cache expirado como reserva
        if (stale) {
          hydrate(stale);
          return;
        }
        uiError();
      });
  }

  /* ------------------------------------------------------------------------
     Inicialização + gancho de testes
     ------------------------------------------------------------------------ */

  function init() {
    if (!mountEls()) return;
    if (els.retry) els.retry.addEventListener("click", load);
    load();
  }

  init();

  // Gancho para testes automatizados — não afeta o funcionamento do site.
  window.OndaProjects = {
    processRepos: processRepos,
    categoriesOf: categoriesOf,
    matchesFilter: matchesFilter,
    formatDate: formatDate,
    CATEGORY_LABELS: CATEGORY_LABELS
  };
})();
