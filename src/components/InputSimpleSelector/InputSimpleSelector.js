import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
      selectedImageWidth: '',
      selectedImageHeight: '',
      selectedLabelClass: '',
      arrowWidth: '8px',
      arrowHeight: '8px',
      menuClass: '',
      itemClass: '',
      itemImageWidth: '',
      itemImageHeight: '',
      TriangleTopPx: '',
      TriangleLeftPx: '',
    },
  } = props

  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [additionalClass, setAdditionalClass] = useState('hidden')

  if (typeof window !== 'undefined') {
    document.addEventListener('click', (e) => {
      if (isOpenMenu && !document.getElementById(id)?.contains(e.target)) {
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
        <Image src={currentSelected.src} alt='selector' width={options.selectedImageWidth} height={options.selectedImageHeight} />

        <span className={`${options.selectedLabelClass} select-none`}>{currentSelected.label}</span>

        <Image src={IconArrow} alt='@icon/arrow.png' width={options.arrowWidth} height={options.arrowHeight} />
      </div>

      <div className={`z-10 ${options.menuClass} ${additionalClass}`}>
        <ul>
          {menuList.map((item, i) => {
            let border = ''

            if (options.hasBorder) {
              border = i > 0 ? ' border-t border-solid border-anchor' : ''
            }

            return item.href
              ? (
                <Link key={item.value} passHref href={item.href}>
                  <div>
                    <li
                      key={item.value}
                      className={`${options.itemClass} ${border}`}
                      onClick={() => handleClickItem(item)}
                    >
                      {item.src && <Image src={item.src} alt={item.alt} width={options.itemImageWidth} height={options.itemImageHeight} />}
                      <span className={`text-sm select-none ${item.src && 'ml-2 mr-2'}`}>{item.label}</span>
                    </li>
                  </div>
                </Link>
              )
              : (
                <li
                  key={item.value}
                  className={`${options.itemClass} ${border}`}
                  onClick={() => handleClickItem(item)}
                >
                  {item.src && <Image src={item.src} alt={item.alt} width={options.itemImageWidth} height={options.itemImageHeight} />}
                  <span className={`text-sm select-none ${item.src && 'ml-2 mr-2'}`}>{item.label}</span>
                </li>
              )
          })}
        </ul>
      </div>

      <TriangleShape additionalClass={`z-[15] ${additionalClass}`} topPx={options.TriangleTopPx} leftPx={options.TriangleLeftPx} />
    </div>
  )
}
