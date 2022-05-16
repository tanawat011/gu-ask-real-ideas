import { useState } from 'react'
import { useSelector } from 'react-redux'

import { InputSimpleSelector } from '@component/InputSimpleSelector/InputSimpleSelector'

import ProfileImage from '@image/profile.png'

export const InputSelectorProfile = () => {
  const profileMenuList = useSelector(state => state.base.profileMenuList)

  const [menuList] = useState(profileMenuList)
  const [currentSelected] = useState({
    src: ProfileImage,
    label: 'Ta Tanawat',
  })

  const handleClickProfileItem = (item) => { }

  return (
    <InputSimpleSelector
      id='selector-profile'
      className='mb-6'
      menuList={menuList}
      onClick={handleClickProfileItem}
      currentSelected={currentSelected}
      options={{
        selectedImageWidth: '40px',
        selectedImageHeight: '40px',
        selectedLabelClass: 'ml-4 mr-2 text-sm text-fossil',
        arrowWidth: '8px',
        arrowHeight: '4px',
        menuClass: 'absolute w-36 bg-card_bg rounded py-2 shadow-round top-12 left-1',
        itemClass: 'flex items-center cursor-pointer py-0.5 px-4 hover:bg-slate',
        TriangleTopPx: 'top-[42px]',
        TriangleLeftPx: 'left-[126px]',
      }}
    />
  )
}
