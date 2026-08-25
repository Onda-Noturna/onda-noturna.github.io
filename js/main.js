/* ==========================================================================
   Onda Noturna — JavaScript principal (vanilla, sem dependências)
   --------------------------------------------------------------------------
   Responsabilidades:
     1. Montar a navbar e o rodapé em todas as páginas (dados em data/content.js)
     2. Menu mobile com animação e acessibilidade (aria-expanded / Esc)
     3. Destacar o link ativo do menu conforme a página atual
     4. Renderizar a central de links (links.html)
     5. Animações de entrada leves (IntersectionObserver)
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------------
     Ícones (SVG no estilo Lucide, usados pelo rodapé e pela página de links)
     ------------------------------------------------------------------------ */
  const ICONS = {
    instagram:
      '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
    facebook:
      '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    youtube:
      '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>',
    music:
      '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    spotify:
      '<circle cx="12" cy="12" r="10"/><path d="M8.5 9.7c2.3-.7 4.8-.4 6.9.8"/><path d="M8.7 12.4c1.9-.5 3.9-.3 5.6.7"/><path d="M9 15c1.5-.4 3-.2 4.4.5"/>',
    whatsapp:
      '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"/>',
    github:
      '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    calendar:
      '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    megaphone:
      '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
    mail:
      '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    heart:
      '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    globe:
      '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    radio:
      '<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1"/>',
    mic:
      '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/>',
    building:
      '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
    clipboard:
      '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
    star:
      '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    fork:
      '<circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="M12 12v3"/>',
    externalLink:
      '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    code:
      '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    users:
      '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    menu:
      '<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>',
    close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  };

  /** Retorna o SVG de um ícone pelo nome. */
  function icon(name, size) {
    const s = size || 20;
    const body = ICONS[name] || ICONS.globe;
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="' + s + '" height="' + s +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + body + "</svg>"
    );
  }

  /** Marca do logo: usa SITE_DATA.site.logo (imagem) ou as iniciais como fallback. */
  function logoMarkHTML() {
    if (typeof SITE_DATA === "undefined") return "";
    const src = SITE_DATA.site && SITE_DATA.site.logo;
    if (src) return '<img class="logo-img" src="' + src + '" alt="" aria-hidden="true">';
    const initials = (SITE_DATA.site && SITE_DATA.site.initials) || "ON";
    return '<span class="logo-mark">' + initials + "</span>";
  }

  /** Nome do arquivo atual (ex.: "about.html"). Funciona local e no Pages. */
  function currentPage() {
    let path = window.location.pathname.split("/").pop();
    if (!path || path === "") path = "index.html";
    return decodeURIComponent(path);
  }

  function isActive(href, current) {
    return href.replace("./", "") === current;
  }

  /* ------------------------------------------------------------------------
     Navbar — montada em todas as páginas dentro de <div id="site-navbar">
     ------------------------------------------------------------------------ */
  function renderNavbar() {
    const mount = document.getElementById("site-navbar");
    if (!mount || typeof SITE_DATA === "undefined") return;

    const current = currentPage();
    const items = SITE_DATA.navigation
      .map(function (item) {
        const active = isActive(item.href, current) ? " active" : "";
        return '<a class="nav-link' + active + '" href="' + item.href + '">' + item.label + "</a>";
      })
      .join("");

    const name = SITE_DATA.site.name || "Onda Noturna";

    mount.innerHTML =
      '<nav class="navbar" role="navigation" aria-label="Navegação principal">' +
      '<div class="container-custom">' +
      '<div class="navbar-inner">' +
      '<a class="logo" href="./index.html" aria-label="Página inicial - ' + name + '">' +
      logoMarkHTML() +
      '<span class="logo-text">' + name + "</span>" +
      "</a>" +
      '<div class="nav-desktop">' + items + "</div>" +
      '<button class="menu-toggle" id="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir menu">' +
      icon("menu", 24) +
      "</button>" +
      "</div>" +
      '<div class="mobile-menu" id="mobile-menu">' +
      '<div class="mobile-menu-inner">' + items + "</div>" +
      "</div>" +
      "</div>" +
      "</nav>";

    // Comportamento do menu mobile
    const toggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    function setMenu(open) {
      mobileMenu.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      toggle.innerHTML = icon(open ? "close" : "menu", 24);
    }

    toggle.addEventListener("click", function () {
      setMenu(!mobileMenu.classList.contains("open"));
    });

    mobileMenu.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setMenu(false);
    });
  }

  /* ------------------------------------------------------------------------
     Rodapé — montado em todas as páginas dentro de <div id="site-footer">
     ------------------------------------------------------------------------ */
  function renderFooter() {
    const mount = document.getElementById("site-footer");
    if (!mount || typeof SITE_DATA === "undefined") return;

    const quickLinks = SITE_DATA.navigation
      .slice(0, 6)
      .map(function (item) {
        return '<li><a href="' + item.href + '">' + item.label + "</a></li>";
      })
      .join("");

    const socials = SITE_DATA.socials
      .map(function (social) {
        return (
          '<a href="' + social.url + '" target="_blank" rel="noopener noreferrer" ' +
          'aria-label="Siga-nos no ' + social.name + '" title="' + social.name + '">' +
          icon(social.icon, 20) +
          "</a>"
        );
      })
      .join("");

    mount.innerHTML =
      '<footer class="site-footer" role="contentinfo">' +
      '<div class="container-custom">' +
      '<div class="footer-grid">' +
      "<div>" +
      '<a class="logo" href="./index.html" aria-label="Página inicial">' +
      logoMarkHTML() +
      '<span class="logo-text">' + SITE_DATA.site.name + "</span></a>" +
      '<p class="footer-description">' + (SITE_DATA.site.description || "") + "</p>" +
      "</div>" +
      '<div><h3 class="footer-title">Links Rápidos</h3>' +
      '<ul class="footer-links">' + quickLinks + "</ul></div>" +
      '<div><h3 class="footer-title">Redes Sociais</h3>' +
      '<div class="footer-social">' + socials + "</div></div>" +
      "</div>" +
      '<div class="footer-bottom">' +
      "<p>© <span data-year></span> " + SITE_DATA.site.name +
      ". Todos os direitos reservados.</p>" +
      "</div></div></footer>";
  }

  /* ------------------------------------------------------------------------
     Página links.html — central de links
     ------------------------------------------------------------------------ */
  function setText(id, value) {
    const el = document.getElementById(id);
    if (el && typeof value !== "undefined") el.textContent = value;
  }

  function isExternal(url) {
    return String(url).indexOf("http://") === 0 || String(url).indexOf("https://") === 0;
  }

  function renderBioPage() {
    const list = document.getElementById("bio-links");
    if (!list || typeof SITE_DATA === "undefined" || !SITE_DATA.bio) return;

    const bio = SITE_DATA.bio;
    const profile = bio.profile || {};

    // Cabeçalho com perfil
    setText("bio-name", profile.name);
    setText("bio-tagline", profile.tagline);
    setText("bio-desc", profile.description);

    const avatar = document.getElementById("bio-avatar");
    if (avatar) {
      avatar.innerHTML = profile.image
        ? '<img src="' + profile.image + '" alt="Logo de ' + profile.name + '">'
        : '<span class="bio-avatar-mark">' + (profile.initials || "ON") + "</span>";
    }

    // Cards de links principais
    list.innerHTML = bio.links
      .map(function (item, index) {
        const delay = "transition-delay:" + index * 70 + "ms";
        const target = isExternal(item.url) ? ' target="_blank" rel="noopener noreferrer"' : "";
        const chip = item.emoji
          ? '<span class="bio-link-icon" aria-hidden="true">' + item.emoji + "</span>"
          : '<span class="bio-link-icon">' + icon(item.icon || "globe", 22) + "</span>";
        const subtitle = item.subtitle
          ? '<span class="bio-link-subtitle">' + item.subtitle + "</span>"
          : "";
        return (
          '<a class="bio-link reveal" style="' + delay + '" href="' + item.url + '"' + target + ">" +
          chip +
          '<span class="bio-link-text"><span class="bio-link-title">' + item.title + "</span>" +
          subtitle +
          "</span>" +
          '<span class="bio-link-arrow">' + icon("arrowRight", 18) + "</span>" +
          "</a>"
        );
      })
      .join("");

    // Fileira compacta de redes sociais
    const socialsMount = document.getElementById("bio-socials");
    if (socialsMount) {
      socialsMount.innerHTML = (bio.socials || [])
        .map(function (social, index) {
          const order = bio.links.length * 70 + index * 60;
          return (
            '<a class="bio-social reveal" style="transition-delay:' + order + 'ms" href="' +
            social.url + '" target="_blank" rel="noopener noreferrer" aria-label="' +
            social.name + '" title="' + social.name + '">' +
            icon(social.icon, 20) +
            "</a>"
          );
        })
        .join("");
    }
  }

  /* ------------------------------------------------------------------------
     Animações leves de entrada (substituto do Framer Motion)
     ------------------------------------------------------------------------ */
  function setupReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    if (!("IntersectionObserver" in window)) {
      elements.forEach(function (el) { el.classList.add("visible"); });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach(function (el) { observer.observe(el); });
  }

  /* ------------------------------------------------------------------------
     Catálogo de ícones — usado pela página icones.html (consulta visual)
     ------------------------------------------------------------------------ */
  window.ONDA_ICON_NAMES = Object.keys(ICONS);
  window.ondaIconSvg = icon;

  /* ------------------------------------------------------------------------
     Inicialização
     ------------------------------------------------------------------------ */
  renderNavbar();
  renderFooter();
  renderBioPage();

  // Ano corrente em todos os <span data-year>
  const year = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = year;
  });

  setupReveal();
})();
