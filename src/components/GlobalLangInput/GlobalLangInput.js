import { useState } from 'react'
import { useSelector } from 'react-redux'

import { SimpleSelector } from '@component/SimpleSelector/SimpleSelector'

export const GlobalLangInput = () => {
  const langList = useSelector(state => state.base.langList)

  const [currentLang, setCurrentLang] = useState(langList[0])

  const handleChangeLang = (lang) => {
    setCurrentLang(lang)
  }

  return (
    <SimpleSelector
      id='global-lang-input'
      menuList={langList}
      onClick={handleChangeLang}
      currentSelected={currentLang}
      options={{
        hasBorder: true,
        selectedWidth: '24px',
        selectedHeight: '18px',
        selectedLabelClass: 'ml-2 mr-2 text-sm',
        arrowWidth: '12px',
        arrowHeight: '6px',
        menuClass: 'absolute w-40 bg-card_bg rounded px-4 py-3 shadow-round top-9 -right-0.5',
        itemClass: 'flex items-center cursor-pointer py-2',
        TriangleTopPx: 'top-[30px]',
        TriangleLeftPx: 'right-1',
      }}
    />
  )
}
