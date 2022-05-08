import { useState } from 'react'
import Image from 'next/image'

import IconArrow from '@icon/arrow.png'
import FlagUS from '@flag/us.png'

const triangleShape = 'border-solid border-b-8 border-x-transparent border-x-8 border-t-0'
const langList = [
  {
    label: 'English',
    value: 'en',
  },
]

export const GlobalLangInput = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [classMenu, setClassMenu] = useState('hidden')
  const [langLabel, setLangLabel] = useState(langList[0].label)

  if (typeof window !== 'undefined') {
    document.addEventListener('click', (e) => {
      if (isOpenMenu && !document.getElementById('wrap-selector-lang').contains(e.target)) {
        setClassMenu('hidden')
        setIsOpenMenu(false)
      }
    })
  }

  const toggleLangList = () => {
    if (isOpenMenu) {
      setClassMenu('hidden')
    } else {
      setClassMenu('block')
    }

    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <div id='wrap-selector-lang' className='relative'>
      <div className='flex items-center cursor-pointer' onClick={toggleLangList}>
        <Image src={FlagUS} alt='@flag/us.png' width='24px' height='20px' />

        <span className='ml-2 mr-2'>{langLabel}</span>

        <Image src={IconArrow} alt='@icon/arrow.png' width='12px' height='6px' />
      </div>

      <div className={`absolute top-9 w-40 -left-12 bg-card_bg rounded px-4 py-3 shadow-round ${classMenu}`}>
        xxxx
      </div>

      <div className={`absolute top-[30px] left-[86px] border-b-card_bg ${triangleShape} ${classMenu}`} />
    </div>
  )
}
