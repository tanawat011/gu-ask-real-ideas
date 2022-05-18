import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'

import { openBackdrop, openRightSidebar } from '@redux/baseSlice'

import IconGear from '@icon/gear.png'

const twButton = clsx(
  'fixed',
  'right-0',
  'top-[150px]',
  'w-10',
  'h-10',
)
const twWrapRightSidebar = (additional) => clsx(
  'fixed',
  'right-0',
  'bg-white',
  'z-30',
  'transition-all',
  'ease-out',
  'duration-300',
  additional,
)
const twRightSidebar = clsx(
  'flex',
  'justify-center',
  'items-center',
  'w-right_sidebar',
  'h-[100vh]',
)

export const RightSidebar = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector(state => state.base.isOpenRightSidebar)

  const [displayRightSidebar, setDisplayRightSidebar] = useState('w-0')

  useEffect(() => {
    if (isOpen) {
      setDisplayRightSidebar('w-right_sidebar')
    } else {
      setDisplayRightSidebar('w-0')
    }
  }, [isOpen])

  const toggleRightSidebar = () => {
    dispatch(openBackdrop())
    dispatch(openRightSidebar())
  }

  return (
    <>
      <button className={twButton} onClick={toggleRightSidebar}>
        <Image className='animate-spin' src={IconGear} alt='@icon/gear.png' width='20px' height='20px' />
      </button>

      <div className={twWrapRightSidebar(displayRightSidebar)}>
        <div className={twRightSidebar}>
          Right Sidebar
        </div>
      </div>
    </>
  )
}
