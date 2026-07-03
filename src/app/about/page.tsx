import { Metadata } from 'next'
import { ConstructionMessage } from '@/components/common/ConstructionMessage'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça a história e a missão da Onda Noturna',
}

export default function AboutPage() {
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