import clsx from 'clsx'

const twCardBody = (additional) => clsx(
  'p-6',
  'flex',
  'flex-col',
  additional,
)

export const CardBody = ({ children, className = '' }) => {
  return (
    <div className={twCardBody(className)}>
      {children}
    </div>
  )
}
