# Onda Noturna 🌊

Portal da **Onda Noturna** — Cultura, Música e Comunidade.

Site **100% estático**: HTML + CSS + JavaScript vanilla. Sem Node.js, sem
build, sem banco de dados, sem servidor. Publicado direto no GitHub Pages.

---

## 📁 Estrutura de arquivos

```text
├── index.html            # Página inicial
├── links.html            # ⭐ Central de Links (estilo Linktree)
├── about.html            # Sobre
├── manifesto.html        # Manifesto
├── atuacao.html          # Atuação
├── musica.html           # Música
├── eventos.html          # Eventos
├── radio.html            # Rádio
├── projetos.html         # Projetos
├── labs.html             # Labs
├── formacao.html         # Formação
├── noticias.html         # Notícias
├── loja.html             # Loja
├── apoie.html            # Apoie
├── voluntariado.html     # Voluntariado
├── contato.html          # Contato
├── 404.html              # Página de erro (usada automaticamente pelo GitHub Pages)
├── css/
│   └── style.css         # Toda a identidade visual (cores, fontes, componentes)
├── js/
│   └── main.js           # Navbar, rodapé, menu mobile e página de links
├── data/
│   └── content.js        # ⭐ TODO O CONTEÚDO EDITÁVEL DO SITE
├── assets/
│   ├── icons/            # Favicon e ícone do app (SVG)
│   └── images/           # Suas imagens (coloque aqui)
├── manifest.webmanifest  # Configuração de PWA/ícone
├── robots.txt / sitemap.xml / .nojekyll
└── README.md
```

## ✏️ Como editar o conteúdo

Quase tudo está centralizado em **`data/content.js`**. Abra o arquivo num
editor de texto simples, altere o que quiser, salve e recarregue o site.
Não é preciso instalar nada nem executar nenhum comando.

### Alterar links (menu, redes sociais e página links.html)

1. Abra `data/content.js`.
2. Edite as seções:
   - **`navigation`** → itens do menu do topo e do rodapé;
   - **`socials`** → redes sociais do rodapé;
   - **`bio.links`** → botões grandes da página `links.html`:

```js
links: [
  {
    title: "Ouça nossa música",        // texto do botão
    subtitle: "Playlists e lançamentos", // texto menor (opcional)
    url: "https://open.spotify.com/...", // destino
    icon: "spotify",                     // ícone (lista abaixo)
  },
]
```

Para usar um emoji no lugar do ícone, troque `icon:` por `emoji: "🎵"`.

**Ícones disponíveis:** `instagram`, `facebook`, `youtube`, `spotify`,
`whatsapp`, `github`, `music`, `calendar`, `megaphone`, `mail`, `heart`,
`globe`, `radio`, `arrowRight`.

### Alterar nome, slogan e descrição

No mesmo arquivo, ajuste `bio.profile` (nome, tagline, descrição) e
`site.description`. As letras do quadrado vermelho do logo ficam em
`site.initials` e `bio.profile.initials`.

## 🖼️ Como alterar imagens

1. Copie sua imagem para `assets/images/`.
2. Referencie sempre com caminho relativo, por exemplo `./assets/images/foto.jpg`.
3. Para usar uma foto de perfil na página de links, preencha
   `bio.profile.image` em `data/content.js`:

```js
profile: {
  ...
  image: "./assets/images/profile.jpg", // vazio "" = usa as iniciais "ON"
}
```

O favicon fica em `assets/icons/favicon.svg` — substitua o arquivo mantendo
o mesmo nome para atualizar em todo o site.

## ▶️ Como executar localmente

**Jeito mais simples:** dê dois cliques no `index.html`. Pronto.

Se preferir um servidor local (recomendado para testar tudo):

```bash
# dentro da pasta do projeto, escolha UMA opção:
python3 -m http.server 8000     # Python
npx serve .                      # Node, se tiver instalado
```

Depois abra `http://localhost:8000` no navegador.

## 🚀 Como publicar no GitHub Pages

1. Faça push dos arquivos para a branch `main` do repositório
   (`onda-noturna.github.io`).
2. No GitHub, vá em **Settings → Pages**.
3. Em **Source**, escolha *Deploy from a branch* → branch `main` → pasta `/ (root)`.
4. Pronto: o site fica no ar em `https://onda-noturna.github.io`.

Toda nova alteração enviada ao repositório publica automaticamente.
O arquivo `.nojekyll` já está incluído para servir os arquivos exatamente
como estão.

> Se um dia o repositório mudar de nome (publicando em subpasta, tipo
> `usuario.github.io/nome-do-repo/`), nada precisa ser alterado: todos os
> caminhos internos já são relativos (`./css/style.css`, `./about.html`, ...).
> Só atualize as URLs de `site.url`, `robots.txt` e `sitemap.xml`.

## ❓ Onde mexer em cada coisa

| Quero mudar...                    | Arquivo                          |
|----------------------------------|----------------------------------|
| Menu, links, redes sociais, bio  | `data/content.js`                |
| Cores, fontes, espaçamentos      | `css/style.css` (variáveis em `:root`) |
| Texto de uma página interna      | O próprio `.html` da página      |
| Imagens                          | `assets/images/`                 |
| Favicon / ícone                  | `assets/icons/favicon.svg`       |
| Endereços para o Google          | `sitemap.xml` e `robots.txt`     |

## 🎨 Identidade visual

- **Cores:** fundo `#090909` · primária `#D90429` · texto `#F5F5F5`
- **Fontes:** Bebas Neue (títulos) · Inter (texto) — carregadas via Google Fonts
- Paleta e tipografia ficam nas variáveis CSS em `:root`, no topo de `style.css`.

## 📄 Licença

Todos os direitos reservados © Onda Noturna.

---

Desenvolvido com ❤️ pela equipe Onda Noturna.
