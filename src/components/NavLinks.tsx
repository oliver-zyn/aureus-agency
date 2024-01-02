import { buttonVariants } from './ui/button'

interface NavLinksProps {
  size: 'default' | 'sm' | 'lg' | 'icon' | null | undefined
}

export default function NavLinks({ size }: NavLinksProps) {
  return (
    <>
      <a
        href="#about"
        className={buttonVariants({
          variant: 'ghost',
          size,
        })}
      >
        Sobre
      </a>
      <a
        href="#services"
        className={buttonVariants({
          variant: 'ghost',
          size,
        })}
      >
        Serviços
      </a>
      <a
        href="#contact"
        className={buttonVariants({
          variant: 'ghost',
          size,
        })}
      >
        Contato
      </a>
    </>
  )
}
