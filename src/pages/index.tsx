import { ArrowRight } from 'phosphor-react'
import Image from 'next/image'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { buttonVariants } from '@/components/ui/button'
import estatuaImg from '../assets/rocketDraw.svg'

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mt-20 lg:mt-44 flex items-center justify-between gap-24">
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start gap-1">
          <h1 className="max-w-4xl text-5xl font-bold lg:text-6xl">
            Decole sua presença digital, impulsione suas{' '}
            <span className="text-purple-aureus">vendas</span>
          </h1>
          <p className="mt-5 max-w-4xl text-zinc-700 sm:text-lg">
            A <strong>Aureus Agency</strong> está aqui para elevar sua marca,
            alcançar novos patamares e conquistar o sucesso que você merece.
            Vamos voar juntos!
          </p>
          <a
            className={buttonVariants({
              size: 'lg',
              className:
                'mt-5 z-10 bg-purple-aureus hover:bg-purple-aureus/80 max-w-48',
            })}
            href="https://wa.me/554691357970"
            target="_blank"
            rel="noreferrer"
          >
            Ver Serviços <ArrowRight weight="bold" className="ml-2 h-5 w-5" />
          </a>
        </div>
        <div className="hidden lg:block">
          <Image src={estatuaImg} width={537} height={580} alt="" />
        </div>
      </MaxWidthWrapper>

      {/* Blur background */}

      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      <div className="h-[100vh]">asdsaads</div>
    </>
  )
}
