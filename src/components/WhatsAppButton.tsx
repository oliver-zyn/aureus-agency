import { WhatsappLogo } from 'phosphor-react'
import { buttonVariants } from './ui/button'

interface WhatsAppButtonProps {
  size: 'default' | 'sm' | 'lg' | 'icon' | null | undefined
}

export default function WhatsAppButton({ size }: WhatsAppButtonProps) {
  return (
    <a
      className={buttonVariants({
        size,
        className: 'bg-purple-aureus hover:bg-purple-aureus/80',
      })}
      href="https://wa.me/554691357970"
      target="_blank"
      rel="noreferrer"
    >
      Fale Conosco <WhatsappLogo weight="fill" className="ml-2 h-5 w-5" />
    </a>
  )
}
