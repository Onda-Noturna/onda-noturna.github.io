import { Metadata } from 'next'
import { ConstructionMessage } from '@/components/common/ConstructionMessage'

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Conheça os projetos da Onda Noturna',
}

export default function ProjetosPage() {
  return (
    <div className="section">
      <div className="container-custom">
        <ConstructionMessage 
          title="Página em construção"
          description="Página em construção."
        />
      </div>
    </div>
  )
}
