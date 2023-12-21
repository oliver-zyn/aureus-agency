import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { WhatsappLogo } from 'phosphor-react'
import { buttonVariants } from './ui/button'

export default function Navbar() {
  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span className="text-purple-aureus font-semibold">AureusAgency.</span>
          </Link>

          {/* adicionar botao mobile */}

          <div className="hidden items-center space-x-4 sm:flex">
            <a
              href="/"
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
              })}
            >
              Serviços
            </a>
            <a
              href="/"
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
              })}
            >
              Sobre
            </a>
            <a
              href="/"
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
              })}
            >
              Contato
            </a>

          </div>
          <a
            className={buttonVariants({
              size: 'default',
              className: 'bg-purple-aureus hover:bg-aureus/80 max-w-48 hover:bg-purple-aureus/80',
            })}
            href="https://wa.me/554691357970"
            target="_blank"
          >
            Fale Conosco <WhatsappLogo weight="regular" className="ml-2 h-5 w-5" />
          </a>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
