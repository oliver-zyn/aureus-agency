import { buttonVariants } from './ui/button'

interface NavLinksProps {
  size: 'default' | 'sm' | 'lg' | 'icon' | null | undefined
  closeMobileMenu: () => void
}

export default function NavLinks({ size, closeMobileMenu }: NavLinksProps) {
  return (
    <>
      <a
        href="#about"
        onClick={closeMobileMenu}
        className={buttonVariants({
          variant: 'ghost',
          size,
        })}
      >
        Sobre
      </a>
      <a
        href="#services"
        onClick={closeMobileMenu}
        className={buttonVariants({
          variant: 'ghost',
          size,
        })}
      >
        Serviços
      </a>
      <a
        href="#contact"
        onClick={closeMobileMenu}
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
