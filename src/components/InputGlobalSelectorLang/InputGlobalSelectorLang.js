import clsx from 'clsx'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import { InputSimpleSelector } from '@component/InputSimpleSelector/InputSimpleSelector'

const twSelectorLangMenu = clsx(
  'absolute',
  'w-40',
  'bg-card_bg',
  'rounded',
  'px-4',
  'py-3',
  'shadow-round',
  'top-9',
  '-right-0.5',
)
const twSelectorLangItem = clsx(
  'flex',
  'items-center',
  'cursor-pointer',
  'py-2',
)

export const InputGlobalSelectorLang = () => {
  const langList = useSelector(state => state.base.langList)

  const [currentLang, setCurrentLang] = useState(langList[0])

  const handleChangeLang = (lang) => {
    setCurrentLang(lang)
  }

  return (
    <InputSimpleSelector
      id='global-lang-input'
      menuList={langList}
      onClick={handleChangeLang}
      currentSelected={currentLang}
      options={{
        hasBorder: true,
        selectedImageWidth: '22px',
        selectedImageHeight: '16px',
        selectedLabelClass: 'ml-2 mr-2 text-sm',
        arrowWidth: '12px',
        arrowHeight: '6px',
        menuClass: twSelectorLangMenu,
        itemClass: twSelectorLangItem,
        itemImageWidth: '22px',
        itemImageHeight: '16px',
        TriangleTopPx: 'top-[30px]',
        TriangleLeftPx: 'right-1',
      }}
    />
  )
}
