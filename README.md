# Onda Noturna

Portal da Onda Noturna - Cultura, Música e Comunidade

## 📋 Sobre o Projeto

Projeto desenvolvido com Next.js 15, TypeScript e TailwindCSS, seguindo as melhores práticas de arquitetura e organização de código. O objetivo é criar uma base sólida e escalável para o portal da Onda Noturna.

## 🚀 Stack Tecnológica

- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: TailwindCSS
- **Componentes UI**: shadcn/ui
- **Ícones**: Lucide React
- **Animações**: Framer Motion
- **Qualidade de Código**: ESLint, Prettier, Husky, lint-staged

## 📁 Estrutura de Pastas

```
onda-noturna.github.io/
├── src/
│   ├── app/                    # Rotas e páginas (App Router)
│   │   ├── about/             # Página Sobre
│   │   ├── manifesto/         # Página Manifesto
│   │   ├── atuacao/           # Página Atuação
│   │   ├── musica/            # Página Música
│   │   ├── eventos/           # Página Eventos
│   │   ├── radio/             # Página Rádio
│   │   ├── projetos/          # Página Projetos
│   │   ├── labs/              # Página Labs
│   │   ├── formacao/          # Página Formação
│   │   ├── noticias/          # Página Notícias
│   │   ├── loja/              # Página Loja
│   │   ├── apoie/             # Página Apoie
│   │   ├── voluntariado/      # Página Voluntariado
│   │   ├── contato/           # Página Contato
│   │   ├── layout.tsx         # Layout global
│   │   ├── page.tsx           # Página Home
│   │   └── sitemap.ts         # Sitemap dinâmico
│   ├── components/            # Componentes reutilizáveis
│   │   ├── ui/                # Componentes UI base (Button, etc)
│   │   ├── layout/            # Componentes de layout (Navbar, Footer)
│   │   └── common/            # Componentes comuns (Logo, ConstructionMessage)
│   ├── lib/                   # Funções utilitárias
│   ├── hooks/                 # Custom hooks
│   ├── types/                 # Definições de tipos TypeScript
│   ├── styles/                # Estilos globais
│   │   └── globals.css        # CSS global com variáveis e utilitários
│   ├── config/                # Arquivos de configuração
│   │   └── site.config.ts     # Configurações do site
│   └── assets/                # Assets do projeto
│       ├── logos/
│       ├── icons/
│       ├── images/
│       ├── backgrounds/
│       └── illustrations/
├── public/                    # Arquivos estáticos
│   ├── logos/
│   ├── icons/
│   ├── images/
│   ├── backgrounds/
│   ├── illustrations/
│   ├── robots.txt
│   └── manifest.webmanifest
├── api/                       # API routes (futuro)
├── cms/                       # Integração com CMS (futuro)
├── database/                  # Banco de dados (futuro)
├── auth/                      # Autenticação (futuro)
├── services/                  # Serviços externos (futuro)
├── store/                     # Gerenciamento de estado (futuro)
├── scripts/                   # Scripts utilitários
├── .husky/                    # Git hooks
├── tailwind.config.ts         # Configuração do TailwindCSS
├── postcss.config.js          # Configuração do PostCSS
├── tsconfig.json              # Configuração do TypeScript
├── next.config.js             # Configuração do Next.js
├── .eslintrc.json             # Configuração do ESLint
├── .prettierrc                # Configuração do Prettier
├── .prettierignore            # Arquivos ignorados pelo Prettier
├── .lintstagedrc.json         # Configuração do lint-staged
└── package.json               # Dependências e scripts
```

## 🎨 Tema e Cores

### Paleta de Cores

- **Primária**: `#D90429` (Vermelho vibrante)
- **Secundária**: `#8B0000` (Vermelho escuro)
- **Preto**: `#090909`
- **Cinza**: `#202020`
- **Branco**: `#F5F5F5`

### Tipografia

- **Títulos**: Bebas Neue
- **Texto**: Inter

## 🛠️ Instalação

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/Onda-Noturna/onda-noturna.github.io.git
cd onda-noturna.github.io
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em desenvolvimento:
```bash
npm run dev
```

4. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter ESLint
- `npm run format` - Formata o código com Prettier
- `npm run prepare` - Instala os git hooks do Husky

## 🎯 Funcionalidades Implementadas

### Estrutura Base
- ✅ Next.js 15 com App Router
- ✅ TypeScript configurado
- ✅ TailwindCSS com tema personalizado
- ✅ CSS Variables para tema claro/escuro
- ✅ Google Fonts (Bebas Neue, Inter)

### Componentes
- ✅ Navbar responsiva com menu mobile
- ✅ Footer com links e redes sociais
- ✅ Logo reutilizável
- ✅ Botão com variantes e animações
- ✅ Mensagem de "Página em construção"

### Páginas
- ✅ Home
- ✅ Sobre
- ✅ Manifesto
- ✅ Atuação
- ✅ Música
- ✅ Eventos
- ✅ Rádio
- ✅ Projetos
- ✅ Labs
- ✅ Formação
- ✅ Notícias
- ✅ Loja
- ✅ Apoie
- ✅ Voluntariado
- ✅ Contato

### SEO e Performance
- ✅ Metadata global e por página
- ✅ Open Graph configurado
- ✅ Twitter Cards
- ✅ Sitemap dinâmico
- ✅ Robots.txt
- ✅ Manifest PWA
- ✅ Lazy Loading de imagens
- ✅ Fontes otimizadas com next/font

### Qualidade de Código
- ✅ ESLint configurado
- ✅ Prettier configurado
- ✅ Husky com git hooks
- ✅ lint-staged para pré-commit
- ✅ TypeScript strict mode

### Acessibilidade
- ✅ ARIA labels
- ✅ Navegação por teclado
- ✅ Contraste adequado
- ✅ Landmarks semânticos

## 🔧 Convenções

### Nomenclatura
- **Arquivos**: camelCase para arquivos TypeScript/JavaScript
- **Componentes**: PascalCase
- **Pastas**: kebab-case
- **Classes CSS**: Seguem convenção TailwindCSS

### Estrutura de Componentes
- Componentes de layout em `components/layout/`
- Componentes UI base em `components/ui/`
- Componentes comuns em `components/common/`

### Aliases de Importação
- `@/` → `src/`
- `@/components/*` → `src/components/*`
- `@/lib/*` → `src/lib/*`
- `@/hooks/*` → `src/hooks/*`
- `@/types/*` → `src/types/*`
- `@/config/*` → `src/config/*`
- `@/assets/*` → `src/assets/*`

## 📱 Responsividade

- Mobile First
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## 🚀 Deploy

O projeto está configurado para deploy no GitHub Pages. Para fazer o deploy:

1. Configure o repositório no GitHub
2. Ative o GitHub Pages nas configurações
3. O site será automaticamente deployado

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, siga as convenções do projeto e certifique-se de que o código passa por todos os checks de qualidade antes de enviar um PR.

## 📄 Licença

Todos os direitos reservados © {new Date().getFullYear()} Onda Noturna

---

Desenvolvido com ❤️ pela equipe Onda Noturna