import clsx from 'clsx'

const twCardHeader = (additional) => clsx(
  'px-6',
  'pt-6',
  'select-none',
  'text-sm',
  'font-semibold',
  additional,
)

export const CardHeader = ({ children, className = '' }) => {
  return (
    <div className={twCardHeader(className)}>
      {children}
    </div>
  )
}
