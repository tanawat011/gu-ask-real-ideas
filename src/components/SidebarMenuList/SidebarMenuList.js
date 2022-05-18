import clsx from 'clsx'
import { useSelector } from 'react-redux'

import { SidebarMenuItem } from './SidebarMenuItem'

const twTitleItem = (additional) => clsx(
  'flex',
  'items-center',
  'h-10',
  'pl-7',
  'select-none',
  additional,
)

export const SidebarMenuList = () => {
  const sidebarMenuList = useSelector(state => state.base.sidebarMenuList)

  return (
    <ul className='h-fit w-full'>
      {sidebarMenuList.map((item, i) => {
        let marginTopOfFirstLabel = i === 0 ? 'mt-[19px]' : 'mt-5'

        if (item.icon) {
          return <SidebarMenuItem key={item.label + i} item={item} index={i} onClick={item.onClick} />
        }

        return <li key={item.label + i} className={twTitleItem(marginTopOfFirstLabel)}>{item.label}</li>
      })}
    </ul>
  )
}
