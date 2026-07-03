import { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'Onda Noturna',
  description: 'Portal da Onda Noturna - Cultura, Música e Comunidade',
  url: 'https://onda-noturna.github.io',
  ogImage: '/images/og-image.jpg',
  links: {
    instagram: 'https://instagram.com/ondanoturna',
    facebook: 'https://facebook.com/ondanoturna',
    youtube: 'https://youtube.com/ondanoturna',
    spotify: 'https://open.spotify.com/ondanoturna',
  },
}

export const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '/about' },
  { label: 'Manifesto', href: '/manifesto' },
  { label: 'Atuação', href: '/atuacao' },
  { label: 'Música', href: '/musica' },
  { label: 'Eventos', href: '/eventos' },
  { label: 'Rádio', href: '/radio' },
  { label: 'Projetos', href: '/projetos' },
  { label: 'Labs', href: '/labs' },
  { label: 'Formação', href: '/formacao' },
  { label: 'Notícias', href: '/noticias' },
  { label: 'Loja', href: '/loja' },
  { label: 'Apoie', href: '/apoie' },
  { label: 'Voluntariado', href: '/voluntariado' },
  { label: 'Contato', href: '/contato' },
]

export const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/ondanoturna', icon: 'Instagram' },
  { name: 'Facebook', href: 'https://facebook.com/ondanoturna', icon: 'Facebook' },
  { name: 'YouTube', href: 'https://youtube.com/ondanoturna', icon: 'YouTube' },
  { name: 'Spotify', href: 'https://open.spotify.com/ondanoturna', icon: 'Music' },
]