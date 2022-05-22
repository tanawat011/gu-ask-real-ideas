import clsx from 'clsx'

const twCard = (additional) => clsx(
  'bg-card_bg',
  'rounded-xl',
  'shadow-xl',
  'm-4',
  additional,
)

export const Card = ({
  children,
  className = '',
  autoWidth = false,
  fullWidth = false,
  fullHeight = false,
}) => {
  const height = fullHeight ? 'h-auto' : 'h-fit'
  const width = () => {
    if (autoWidth) {
      return 'flex-1'
    }

    return fullWidth ? 'w-full' : 'flex-none'
  }

  const assambleClass = [
    className,
    width(),
    height,
  ]

  return (
    <div className={twCard(assambleClass)}>
      {children}
    </div>
  )
}

export * from './CardBody'
export * from './CardHeader'
