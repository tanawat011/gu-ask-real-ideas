import { useState, useEffect } from 'react'
import Image from 'next/image'

import { BackDrop } from '@component/Backdrop/Backdrop'

import IconGear from '@icon/gear.png'

export const RightSidebar = () => {
  const [displayRightSidebar, setDisplayRightSidebar] = useState('w-0')
  const [isShowBackdrop, setIsShowBackdrop] = useState(false)
  const [isShowRightSidebar, setIsShowRightSidebar] = useState(false)

  useEffect(() => {
    setRightSidebarClass(isShowRightSidebar)
  }, [isShowRightSidebar])

  const toggleRightSidebar = () => {
    setIsShowRightSidebar(!isShowRightSidebar)
  }

  const onClickBackdrop = () => {
    setIsShowRightSidebar(false)
    setRightSidebarClass(false)
  }

  const setRightSidebarClass = (isShow) => {
    setIsShowBackdrop(isShow)

    if (isShow) {
      setDisplayRightSidebar('w-right_sidebar')
    } else {
      setDisplayRightSidebar('w-0')
    }
  }

  return (
    <>
      <button className='fixed right-0 top-[150px] z-10 w-10 h-10' onClick={toggleRightSidebar}>
        <Image className='animate-spin' src={IconGear} alt='@icon/gear.png' width='20px' height='20px' />
      </button>

      <div className={`fixed right-0 bg-white z-20 transition-all ease-out duration-300 ${displayRightSidebar}`}>
        <div className='flex justify-center items-center w-right_sidebar h-[100vh]'>
          Right Sidebar
        </div>
      </div>

      <BackDrop isShowBackdrop={isShowBackdrop} onClickBackdrop={onClickBackdrop} />
    </>
  )
}
