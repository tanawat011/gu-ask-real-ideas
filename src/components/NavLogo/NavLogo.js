import clsx from 'clsx'
import Image from 'next/image'

import IconCollapseSidebar from '@icon/collapse-sidebar.png'

const twWrapLogo = clsx(
  'flex',
  'items-center',
  'w-sidebar',
  'h-navbar',
  'bg-dark',
  'p-9',
  'shadow-b',
)
const twLogo = clsx(
  'text-base',
  'font-bold',
  'pl-5',
  'select-none',
)

export const NavLogo = () => {
  const toggleSidebar = () => {
    console.log('toggleSidebar')
  }

  return (
    <>
      <div className={twWrapLogo}>
        <Image
          className='cursor-pointer'
          src={IconCollapseSidebar}
          alt='@icon/collapse-sidebar.png'
          width='16px'
          height='16px'
          onClick={toggleSidebar}
        />

        <span className={twLogo}>GuAskReal</span>
      </div>
    </>
  )
}
