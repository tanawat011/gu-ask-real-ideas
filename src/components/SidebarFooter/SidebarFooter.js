import clsx from 'clsx'

import Package from '@root/package.json'

const twFooter = () => clsx(
  'flex',
  'justify-center',
  'items-center',
  'w-sidebar',
  'h-footer',
  'bg-charcoal',
  'border-solid',
  'border-t-[1px]',
  'border-anchor',
  'shadow-t',
  'text-xs',
  'select-none',
)

export const SidebarFooter = () => {
  return (
    <>
      <div className={twFooter()}>
        version {Package.version}
      </div>
    </>
  )
}
