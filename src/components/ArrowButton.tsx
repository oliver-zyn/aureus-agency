import { ArrowRight } from 'phosphor-react'
import { buttonVariants } from './ui/button'

interface ArrowButtonProps {
  text: string
  target?: string
  url: string
}

export default function ArrowButton({ text, target, url }: ArrowButtonProps) {
  return (
    <a
      className={buttonVariants({
        size: 'lg',
        className:
          'mt-5 z-10 bg-purple-aureus hover:bg-purple-aureus/80 max-w-72 relative group',
      })}
      href={url}
      target={target}
      rel="noreferrer"
    >
      {text}{' '}
      <span className="ml-2 inline-block">
        <ArrowRight
          weight="bold"
          className="h-5 w-5 group-hover:translate-x-1 transition-transform"
        />
      </span>
    </a>
  )
}
