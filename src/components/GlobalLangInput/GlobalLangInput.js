import { useState } from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'

import IconArrow from '@icon/arrow.png'

const triangleShape = 'border-solid border-b-8 border-x-transparent border-x-8 border-t-0'

export const GlobalLangInput = () => {
  const langList = useSelector(state => state.base.langList)

  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [classMenu, setClassMenu] = useState('hidden')
  const [currentLang, setCurrentLang] = useState(langList[0])

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

  const handleChangeLang = (lang) => {
    setCurrentLang(lang)
  }

  return (
    <div id='wrap-selector-lang' className='relative'>
      <div className='flex items-center cursor-pointer' onClick={toggleLangList}>
        <Image src={currentLang.src} alt={currentLang.alt} width='24px' height='18px' />

        <span className='ml-2 mr-2'>{currentLang.label}</span>

        <Image src={IconArrow} alt='@icon/arrow.png' width='12px' height='6px' />
      </div>

      <div className={`absolute top-9 w-40 -left-12 bg-card_bg rounded px-4 py-3 shadow-round ${classMenu}`}>
        <ul>
          {langList.map((lang, i) => {
            const border = i > 0 ? ' border-t border-solid border-anchor' : ''

            return (
              <li
                key={lang.value}
                className={`flex items-center cursor-pointer py-2${border}`}
                onClick={() => handleChangeLang(lang)}
              >
                <Image src={lang.src} alt={lang.alt} width='24px' height='18px' />
                <span className='ml-2 mr-2'>{lang.label}</span>
              </li>
            )
          })}
        </ul>
      </div>

      <div className={`absolute top-[30px] left-[86px] border-b-card_bg ${triangleShape} ${classMenu}`} />
    </div>
  )
}
