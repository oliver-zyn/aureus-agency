import { Browsers, PresentationChart, Users } from 'phosphor-react'

import Image from 'next/image'
import MaxWidthWrapper from './MaxWidthWrapper'
import ServiceItem from './ServiceItem'
import servicesImg from '../assets/servicesImg.png'

export default function ServicesSection() {
  return (
    <MaxWidthWrapper className="pt-40 pb-40 lg:pt-60 lg:pb-60">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="max-w-4xl text-3xl font-normal lg:text-5xl">
          <span className="font-semibold text-purple-aureus">
            Elevando marcas:
          </span>{' '}
          descubra nossos serviços de marketing digital
        </h1>
        <p className="mt-10 max-w-4xl text-primary/90 sm:text-lg md:max-w-2xl">
          Com a{' '}
          <span className="font-semibold text-purple-aureus">
            Aureus Agency
          </span>
          , por meio da metodologia Sigma,{' '}
          <span className="font-semibold text-purple-aureus">
            geramos resultados
          </span>{' '}
          a curto, médio e longo prazo. Preparamos estrategicamente seu projeto
          para{' '}
          <span className="font-semibold text-purple-aureus">
            impulsionar o crescimento
          </span>{' '}
          da sua empresa.
        </p>
        <div className="flex justify-center items-center mt-16 gap-16 flex-col lg:flex-row">
          <div className="rounded-xl overflow-hidden max-w-96 lg:max-w-96 order-1">
            <Image
              src={servicesImg}
              width={1000}
              height={1500}
              alt=""
              className="lg:h-[33rem] object-cover"
            />
          </div>
          <div className="flex flex-col gap-12 text-left lg:order-1">
            <ServiceItem
              icon={
                <Users
                  size={32}
                  weight="fill"
                  className="text-purple-aureus min-w-[2rem]"
                />
              }
              title="Gestão de redes sociais"
              description="Amplie sua presença online com estratégias envolventes que estabelecem uma conexão sólida entre sua marca e o público."
            />
            <ServiceItem
              icon={
                <PresentationChart
                  size={32}
                  weight="fill"
                  className="text-purple-aureus min-w-[2rem]"
                />
              }
              title="Gestão de tráfego pago"
              description="Otimizamos campanhas de tráfego pago para maximizar resultados e impulsionar o crescimento estratégico do seu negócio."
            />
            <ServiceItem
              icon={
                <Browsers
                  size={32}
                  weight="fill"
                  className="text-purple-aureus min-w-[2rem]"
                />
              }
              title="Criação de lading pages e/ou sites"
              description="Transforme visitantes em clientes. Nossa equipe destaca sua presença digital com experiências focadas na conversão."
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
