import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/config/site.config'

interface LogoProps {
  className?: string
  showText?: boolean
}

const Logo = ({ className = '', showText = true }: LogoProps) => {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-10 h-10 flex-shrink-0">
        <div className="w-full h-full bg-primary rounded-lg flex items-center justify-center">
          <span className="text-white font-display text-2xl font-bold">ON</span>
        </div>
      </div>
      {showText && (
        <span className="font-display text-2xl text-light tracking-wide">
          {siteConfig.name}
        </span>
      )}
    </Link>
  )
}

export { Logo }