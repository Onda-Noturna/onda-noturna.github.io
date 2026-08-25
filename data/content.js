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
    initials: "ON", // letras exibidas no quadrado vermelho do logo
    description: "Portal da Onda Noturna - Cultura, Música e Comunidade",
    url: "https://onda-noturna.github.io", // usado no robots.txt e sitemap.xml
  },

  // Menu de navegação (navbar + rodapé). Use "./arquivo.html" como caminho.
  navigation: [
    { label: "Home",         href: "./index.html" },
    { label: "Sobre",        href: "./about.html" },
    { label: "Manifesto",    href: "./manifesto.html" },
    { label: "Atuação",      href: "./atuacao.html" },
    { label: "Música",       href: "./musica.html" },
    { label: "Eventos",      href: "./eventos.html" },
    { label: "Rádio",        href: "./radio.html" },
    { label: "Projetos",     href: "./projetos.html" },
    { label: "Labs",         href: "./labs.html" },
    { label: "Formação",     href: "./formacao.html" },
    { label: "Notícias",     href: "./noticias.html" },
    { label: "Loja",         href: "./loja.html" },
    { label: "Apoie",        href: "./apoie.html" },
    { label: "Voluntariado", href: "./voluntariado.html" },
    { label: "Contato",      href: "./contato.html" },
    { label: "Links",        href: "./links.html" },
  ],

  // Redes sociais exibidas no rodapé de todas as páginas.
  // Ícones disponíveis: instagram, facebook, youtube, spotify, whatsapp,
  // github, music, calendar, megaphone, mail, heart, globe, radio.
  socials: [
    { name: "Instagram", url: "https://instagram.com/ondanoturna",          icon: "instagram" },
    { name: "Facebook",  url: "https://facebook.com/ondanoturna",           icon: "facebook" },
    { name: "YouTube",   url: "https://youtube.com/ondanoturna",            icon: "youtube" },
    { name: "Spotify",   url: "https://open.spotify.com/ondanoturna",       icon: "spotify" },
  ],

  // ========================================================================
  // PÁGINA LINKS.HTML — Central de links (estilo Linktree)
  // ========================================================================
  bio: {
    profile: {
      name: "Onda Noturna",
      tagline: "Cultura • Música • Comunidade",
      description: "Central de links oficiais. Siga, ouça e faça parte da Onda.",
      initials: "ON",
      // Para usar uma foto, coloque o arquivo em assets/images/ e informe:
      // image: "./assets/images/profile.jpg"
      image: "",
    },

    // Botões principais da página. Cada item aceita:
    //   title     → texto principal do botão
    //   subtitle  → texto menor abaixo do título (opcional)
    //   url       → destino do link (interno "./pagina.html" ou externo)
    //   icon      → nome de um ícone da lista acima
    //   emoji     → opcional: use um emoji no lugar do ícone
    links: [
      {
        title: "Ouça nossa música",
        subtitle: "Playlists e lançamentos",
        url: "https://open.spotify.com/ondanoturna",
        icon: "spotify",
      },
      {
        title: "Conheça o projeto",
        subtitle: "Site oficial da Onda",
        url: "./index.html",
        icon: "globe",
      },
      {
        title: "Próximos eventos",
        subtitle: "Agenda da Onda Noturna",
        url: "./eventos.html",
        icon: "calendar",
      },
      {
        title: "Fale com a gente",
        subtitle: "Contato e imprensa",
        url: "./contato.html",
        icon: "mail",
      },
      {
        title: "Apoie o projeto",
        subtitle: "Quem sustenta a Onda",
        url: "./apoie.html",
        icon: "heart",
      },
    ],

    // Fileira compacta de redes sociais no fim da página.
    socials: [
      { name: "Instagram", url: "https://instagram.com/ondanoturna",    icon: "instagram" },
      { name: "YouTube",   url: "https://youtube.com/ondanoturna",      icon: "youtube" },
      { name: "WhatsApp",  url: "https://wa.me/5500000000000",          icon: "whatsapp" }, // TODO: troque pelo número real
      { name: "Facebook",  url: "https://facebook.com/ondanoturna",     icon: "facebook" },
      { name: "Spotify",   url: "https://open.spotify.com/ondanoturna", icon: "spotify" },
      { name: "GitHub",    url: "https://github.com/Onda-Noturna",      icon: "github" },
    ],
  },
};
