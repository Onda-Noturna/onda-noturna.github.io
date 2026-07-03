import { Metadata } from 'next'
import { ConstructionMessage } from '@/components/common/ConstructionMessage'

export const metadata: Metadata = {
  title: 'Atuação',
  description: 'Conheça as áreas de atuação da Onda Noturna',
}

export default function AtuaçãoPage() {
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
