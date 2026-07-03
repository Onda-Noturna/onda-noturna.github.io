import { Metadata } from 'next'
import { ConstructionMessage } from '@/components/common/ConstructionMessage'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Portal da Onda Noturna - Cultura, Música e Comunidade',
}

export default function HomePage() {
  return (
    <div className="section">
      <div className="container-custom">
        <ConstructionMessage 
          title="Bem-vindo à Onda Noturna"
          description="Estamos preparando uma experiência incrível para você. Em breve, muito conteúdo sobre cultura, música e comunidade."
        />
      </div>
    </div>
  )
}