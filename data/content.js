/* ==========================================================================
   Onda Noturna — Dados editáveis do site
   --------------------------------------------------------------------------
   ⭐ ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR NO DIA A DIA ⭐

   Altere textos, links e redes sociais aqui. Todas as páginas do site
   (menu, rodapé e a central de links) leem os dados deste arquivo.
   Não é preciso instalar nada nem gerar build: salve e recarregue.
   ========================================================================== */

const SITE_DATA = {
  // Informações gerais do site
  site: {
    name: "Onda Noturna",
    initials: "ON", // usado apenas como fallback se "logo" estiver vazio ""
    logo: "./assets/icons/logo-site.png", // logo exibido na navbar e no rodapé
    description: "Portal da Onda Noturna - Tecnologia • Cultura • Educação",
    url: "https://onda-noturna.github.io", // usado no robots.txt e sitemap.xml
  },

  // Menu de navegação (navbar + rodapé). Use "./arquivo.html" como caminho.
  navigation: [
    { label: "Home",         href: "./index.html" },
    { label: "Sobre",        href: "./about.html" },
    { label: "Manifesto",    href: "./manifesto.html" },
    { label: "Atuação",      href: "./atuacao.html" },
    //{ label: "Música",       href: "./musica.html" },
    //{ label: "Eventos",      href: "./eventos.html" },
    //{ label: "Rádio",        href: "./radio.html" },
    { label: "Projetos",     href: "./projetos.html" },
    //{ label: "Labs",         href: "./labs.html" },
    //{ label: "Formação",     href: "./formacao.html" },
    //{ label: "Notícias",     href: "./noticias.html" },
    //{ label: "Loja",         href: "./loja.html" },
    //{ label: "Apoie",        href: "./apoie.html" },
    { label: "Voluntariado", href: "./voluntariado.html" },
    { label: "Contato",      href: "./contato.html" },
    { label: "Links",        href: "./links.html" },
  ],

  // Redes sociais exibidas no rodapé de todas as páginas.
  // Ícones disponíveis (catálogo visual: abra o arquivo icones.html):
  // instagram, facebook, youtube, spotify, whatsapp, github, music,
  // calendar, megaphone, mail, heart, globe, radio, mic, building,
  // clipboard, star, fork, externalLink, arrowRight, menu, close.
  socials: [
    { name: "Instagram", url: "https://instagram.com/onda.noturna",          icon: "instagram" },
    //{ name: "Facebook",  url: "https://facebook.com/ondanoturna",           icon: "facebook" },
    //{ name: "YouTube",   url: "https://youtube.com/ondanoturna",            icon: "youtube" },
    //{ name: "Spotify",   url: "https://open.spotify.com/ondanoturna",       icon: "spotify" },
  ],

  // ========================================================================
  // PÁGINA LINKS.HTML — Central de links (estilo Linktree)
  // ========================================================================
  bio: {
    profile: {
      name: "Onda Noturna",
      tagline: "Tecnologia • Cultura • Educação",
      description: "Central de links oficiais. Siga e faça parte da Onda.",
      initials: "ON", // fallback se "image" estiver vazio ""
      image: "./assets/icons/logo-site.png",
      // Para usar uma foto no lugar do logo, troque o caminho acima,
      // ex.: image: "./assets/images/profile.jpg"
    },

    // Botões principais da página. Cada item aceita:
    //   title     → texto principal do botão
    //   subtitle  → texto menor abaixo do título (opcional)
    //   url       → destino do link (interno "./pagina.html" ou externo)
    //   icon      → nome de um ícone (catálogo visual: abra icones.html)
    //   emoji     → opcional: use um emoji no lugar do ícone
    links: [
      {
        title: "Conheça o projeto",
        subtitle: "Site oficial da Onda",
        url: "./index.html",
        icon: "globe",
      },
      {
        title: "Fale com a gente",
        subtitle: "Contato e imprensa",
        url: "./contato.html",
        icon: "mail",
      },
      {
        title: "Pesquisa I",
        subtitle: "Cena Independente (Artistas/Bandas)",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdVl-ppkv3QgO0P7z7Dz4eI8963x9LCrG-YeK0Kp5y6jtNLSg/viewform?usp=header",
        icon: "mic",
      },
      {
        title: "Pesquisa II",
        subtitle: "Cena Independente (Casas de show)",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdK4JeufJTycCYqkh23_yFe0ZiwIgy46yaV7PA6CYvote_PAw/viewform?usp=header",
        icon: "building",
      },
      {
        title: "Pesquisa III",
        subtitle: "Cena Independente (Produtores)",
        url: "https://docs.google.com/forms/d/e/1FAIpQLScuDsoAbMTDQd0VQGhUH9G-vFKQ90Cz3QaI9EYWZRIFO0aGeQ/viewform?usp=header",
        icon: "megaphone",
      },
    ],

    // Fileira compacta de redes sociais no fim da página.
    socials: [
      { name: "Instagram", url: "https://instagram.com/onda.noturna",    icon: "instagram" },
     // { name: "YouTube",   url: "https://youtube.com/ondanoturna",      icon: "youtube" },
     // { name: "WhatsApp",  url: "https://wa.me/5500000000000",          icon: "whatsapp" }, // TODO: troque pelo número real
     // { name: "Facebook",  url: "https://facebook.com/ondanoturna",     icon: "facebook" },
     // { name: "Spotify",   url: "https://open.spotify.com/ondanoturna", icon: "spotify" },
      { name: "GitHub",    url: "https://github.com/Onda-Noturna",      icon: "github" },
    ],
  },
};
