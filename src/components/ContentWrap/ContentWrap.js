import clsx from 'clsx'

const twBackdrop = clsx(
  'flex',
  'justify-center',
  'items-center',
  'w-full',
  'min-h-[calc(100vh-theme(height.footer)-theme(height.navbar))]',
  'bg-shadow',
)

export const ContentWrap = ({ children }) => {
  return (
    <>
      <div className={twBackdrop}>
        {children}
      </div>
    </>
  )
}
