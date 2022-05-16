import { useSelector } from 'react-redux'

import { SidebarMenuItem } from './SidebarMenuItem'

export const SidebarMenuList = () => {
  const sidebarMenuList = useSelector(state => state.base.sidebarMenuList)

  return (
    <ul className='h-fit w-full'>
      {sidebarMenuList.map((item, i) => {
        if (item.icon) {
          return <SidebarMenuItem key={item.label + i} item={item} index={i} onClick={item.onClick} />
        }

        return <li key={item.label + i} className='flex items-center h-10 mt-5 pl-7 select-none'>{item.label}</li>
      })}
    </ul>
  )
}
