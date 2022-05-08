import Image from 'next/image'

import IconCollapseSidebar from '@icon/collapse-sidebar.png'

export const NavLogo = () => {
  const toggleSidebar = () => {
    console.log('toggleSidebar')
  }

  return (
    <>
      <div className='flex items-center w-sidebar h-navbar bg-dark p-9'>
        <Image
          className='cursor-pointer'
          src={IconCollapseSidebar}
          alt='@icon/collapse-sidebar.png'
          width='16px'
          height='16px'
          onClick={toggleSidebar}
        />

        <span className='text-base font-bold pl-5'>GuAskReal</span>
      </div>
    </>
  )
}
