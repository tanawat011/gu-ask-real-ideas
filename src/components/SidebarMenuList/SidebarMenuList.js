import { useSelector } from 'react-redux'

import { SidebarMenuItem } from './SidebarMenuItem'

export const SidebarMenuList = (props) => {
  const sidebarMenuList = useSelector(state => state.base.sidebarMenuList)

  return (
    <ul className='h-fit mx-5'>
      {sidebarMenuList.map((item, i) => {
        if (item.icon) {
          return <SidebarMenuItem key={item.label + i} item={item} index={i} onClick={item.onClick} />
        }

        return <li key={item.label + i} className='flex items-center h-10 ml-2 mt-5 select-none'>{item.label}</li>
      })}
    </ul>
  )
}
