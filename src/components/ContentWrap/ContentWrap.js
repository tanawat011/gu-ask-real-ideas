import clsx from 'clsx'

const twContent = clsx(
  'p-8',
  'w-full',
  'min-h-[calc(100vh-theme(height.footer)-theme(height.navbar))]',
  'bg-shadow',
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
