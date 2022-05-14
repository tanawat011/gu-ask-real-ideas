import { useState } from 'react'

import { SimpleSelector } from '@component/SimpleSelector/SimpleSelector'

import ProfileImage from '@image/profile.png'

export const Sidebar = () => {
  const [menuList] = useState([
    {
      label: 'My Profile',
      value: 'my-profile',
    },
    {
      label: 'Logout',
      value: 'logout',
    },
  ])
  const [currentSelected] = useState({
    src: ProfileImage,
    label: 'Ta Tanawat',
  })

  return (
    <div className='flex flex-col w-sidebar h-[calc(100vh-theme(height.footer)-theme(height.navbar))] bg-charcoal'>
      <div className='flex flex-col mx-5 mb-3 pt-8 px-3 pb-3'>
        <SimpleSelector
          id='selector-profile'
          className='mb-6'
          menuList={menuList}
          onClick={() => { }}
          currentSelected={currentSelected}
          options={{
            selectedWidth: '40px',
            selectedHeight: '40px',
            selectedLabelClass: 'ml-4 mr-2 text-sm text-fossil',
            arrowWidth: '8px',
            arrowHeight: '4px',
            menuClass: 'absolute w-40 bg-card_bg rounded py-2 shadow-round top-12 left-1',
            itemClass: 'flex items-center cursor-pointer py-0.5 px-4',
            TriangleTopPx: 'top-[42px]',
            TriangleLeftPx: 'left-[144px]',
          }}
        />

        <div>
          Icon
        </div>
      </div>

      <div>
        Menu
      </div>
    </div>
  )
}
