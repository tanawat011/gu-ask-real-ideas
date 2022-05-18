import clsx from 'clsx'

const twFooter = clsx(
  'flex',
  'justify-center',
  'items-center',
  'w-full',
  'h-footer',
  'bg-shadow',
  'border-solid',
  'border-t-[1px]',
  'border-anchor',
  'shadow-t',
  'select-none',
)

export const Footer = () => {
  return (
    <>
      <div className={twFooter}>
        Tanawat Pinthongpan, 2022
      </div>
    </>
  )
}
