import clsx from 'clsx'

const twContent = clsx(
  'p-8',
  'w-full',
  'h-auto',
)

export const ContentWrap = ({ children }) => {
  return (
    <>
      <div className={twContent}>
        {children}
      </div>
    </>
  )
}
