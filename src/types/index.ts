// Tipos globais do projeto

export interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}

export interface SocialMedia {
  name: string
  href: string
  icon: string
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    github?: string
    instagram?: string
    facebook?: string
    twitter?: string
    youtube?: string
    spotify?: string
  }
}

export interface MetadataProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  noIndex?: boolean
}