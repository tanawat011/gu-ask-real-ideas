import { useState } from 'react'
import Image from 'next/image'

import { TriangleShape } from '@component/TriangleShape/TriangleShape'

import IconArrow from '@icon/arrow.png'

export const InputSimpleSelector = (props) => {
  const {
    id,
    className = '',
    menuList = [],
    onClick = () => { },
    currentSelected = {
      src: '',
      label: '-',
    },
    options = {
      hasBorder: false,
      selectedWidth: '16px',
      selectedHeight: '16px',
      selectedLabelClass: '',
      arrowWidth: '8px',
      arrowHeight: '8px',
      menuClass: '',
      itemClass: '',
      TriangleTopPx: '',
      TriangleLeftPx: '',
    },
  } = props

  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [additionalClass, setAdditionalClass] = useState('hidden')

  if (typeof window !== 'undefined') {
    document.addEventListener('click', (e) => {
      if (isOpenMenu && !document.getElementById(id).contains(e.target)) {
        setAdditionalClass('hidden')
        setIsOpenMenu(false)
      }
    })
  }

  const toggleSelector = () => {
    if (isOpenMenu) {
      setAdditionalClass('hidden')
    } else {
      setAdditionalClass('block')
    }

    setIsOpenMenu(!isOpenMenu)
  }

  const handleClickItem = (item) => {
    onClick(item)
  }

  return (
    <div id={id} className={`relative ${className}`}>
      <div className='flex items-center cursor-pointer' onClick={toggleSelector}>
        <Image src={currentSelected.src} alt='selector' width={options.selectedWidth} height={options.selectedHeight} />

        <span className={options.selectedLabelClass}>{currentSelected.label}</span>

        <Image src={IconArrow} alt='@icon/arrow.png' width={options.arrowWidth} height={options.arrowHeight} />
      </div>

      <div className={`z-10 ${options.menuClass} ${additionalClass}`}>
        <ul>
          {menuList.map((item, i) => {
            let border = ''

            if (options.hasBorder) {
              border = i > 0 ? ' border-t border-solid border-anchor' : ''
            }

            return (
              <li
                key={item.value}
                className={`${options.itemClass} ${border}`}
                onClick={() => handleClickItem(item)}
              >
                {item.src && <Image src={item.src} alt={item.alt} width='24px' height='18px' />}
                <span className={`text-sm ${item.src && 'ml-2 mr-2'}`}>{item.label}</span>
              </li>
            )
          })}
        </ul>
      </div>

      <TriangleShape additionalClass={additionalClass} topPx={options.TriangleTopPx} leftPx={options.TriangleLeftPx} />
    </div>
  )
}
