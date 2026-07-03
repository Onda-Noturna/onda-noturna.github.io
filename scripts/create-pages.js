const fs = require('fs')
const path = require('path')

const pages = [
  { name: 'atuacao', title: 'Atuação', description: 'Conheça as áreas de atuação da Onda Noturna' },
  { name: 'musica', title: 'Música', description: 'Conheça o universo musical da Onda Noturna' },
  { name: 'eventos', title: 'Eventos', description: 'Fique por dentro dos eventos da Onda Noturna' },
  { name: 'radio', title: 'Rádio', description: 'Ouça a rádio da Onda Noturna' },
  { name: 'projetos', title: 'Projetos', description: 'Conheça os projetos da Onda Noturna' },
  { name: 'labs', title: 'Labs', description: 'Laboratório de inovação da Onda Noturna' },
  { name: 'formacao', title: 'Formação', description: 'Cursos e formações da Onda Noturna' },
  { name: 'noticias', title: 'Notícias', description: 'Últimas notícias da Onda Noturna' },
  { name: 'loja', title: 'Loja', description: 'Loja oficial da Onda Noturna' },
  { name: 'apoie', title: 'Apoie', description: 'Apoie o projeto Onda Noturna' },
  { name: 'voluntariado', title: 'Voluntariado', description: 'Seja voluntário da Onda Noturna' },
  { name: 'contato', title: 'Contato', description: 'Entre em contato com a Onda Noturna' },
]

const pageTemplate = (title, description) => `import { Metadata } from 'next'
import { ConstructionMessage } from '@/components/common/ConstructionMessage'

export const metadata: Metadata = {
  title: '${title}',
  description: '${description}',
}

export default function ${title.charAt(0).toUpperCase() + title.slice(1)}Page() {
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
`

pages.forEach((page) => {
  const dir = path.join(__dirname, '..', 'src', 'app', page.name)
  const filePath = path.join(dir, 'page.tsx')
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  
  fs.writeFileSync(filePath, pageTemplate(page.title, page.description))
  console.log(`Created: ${page.name}/page.tsx`)
})

console.log('All pages created successfully!')