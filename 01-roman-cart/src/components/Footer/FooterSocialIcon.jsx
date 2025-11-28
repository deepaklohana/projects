
import { Facebook, Instagram, Linkedin, X } from 'lucide-react'

const FooterSocialIcon = ({ href = '#', size = 20, className = '' }) => {
  return (
    <div>
        <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Facebook"
      className={`inline-flex items-center justify-center p-2 rounded-full bg-transparent hover:bg-white/10 ${className}`}
    >
      <Facebook size={size} />
    </a>
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Linkedin"
      className={`inline-flex items-center justify-center p-2 rounded-full bg-transparent hover:bg-white/10 ${className}`}
    >
      <Instagram size={size} />
    </a>
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Linkedin"
      className={`inline-flex items-center justify-center p-2 rounded-full bg-transparent hover:bg-white/10 ${className}`}
    >
      <X size={size} />
    </a>
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Linkedin"
      className={`inline-flex items-center justify-center p-2 rounded-full bg-transparent hover:bg-white/10 ${className}`}
    >
      <Linkedin size={size} />
    </a>
    </div>
    
  )
}

export default FooterSocialIcon
