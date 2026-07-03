interface ConstructionMessageProps {
  title?: string
  description?: string
}

const ConstructionMessage = ({ 
  title = 'Página em construção', 
  description = 'Estamos trabalhando para trazer o melhor conteúdo para você. Volte em breve!' 
}: ConstructionMessageProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="mb-6 text-primary">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
          <path d="M2 20h20M5 20V10l7-5 7 5v10M9 20v-6h6v6" />
        </svg>
      </div>
      
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-light mb-4">
        {title}
      </h1>
      
      <p className="text-light/80 text-lg md:text-xl max-w-2xl mb-8">
        {description}
      </p>
      
      <a 
        href="/" 
        className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-primary hover:bg-primary-dark text-white px-6 py-3 text-lg"
      >
        Voltar para Home
      </a>
    </div>
  )
}

export { ConstructionMessage }
