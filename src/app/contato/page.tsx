import { Metadata } from 'next'
import { ConstructionMessage } from '@/components/common/ConstructionMessage'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a Onda Noturna',
}

export default function ContatoPage() {
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
