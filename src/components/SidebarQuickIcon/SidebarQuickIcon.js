import clsx from 'clsx'
import Image from 'next/image'
import { useSelector } from 'react-redux'

const twWrapQuickIcon = (additional) => clsx(
  'flex',
  'justify-between',
  'items-center',
  'mx-1',
  additional,
)

export const SidebarQuickIcon = () => {
  const quickIconList = useSelector(state => state.base.quickIconList)

  const handleClick = (quickIcon) => console.log(quickIcon.alt)

  return (
    <div className={twWrapQuickIcon()}>
      {quickIconList.map((quickIcon, index) => {
        return (
          <div key={quickIcon.alt + index} className='cursor-pointer' onClick={() => handleClick(quickIcon)}>
            <Image
              src={quickIcon.src}
              alt={quickIcon.alt}
              width={quickIcon.width}
              height={quickIcon.height}
            />
          </div>
        )
      })}
    </div>
  )
}
