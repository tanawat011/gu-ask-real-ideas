import { InputSelectorProfile } from '@component/InputSelectorProfile/InputSelectorProfile'
import { SidebarMenuList } from '@component/SidebarMenuList/SidebarMenuList'
import { SidebarQuickIcon } from '@component/SidebarQuickIcon/SidebarQuickIcon'

export const Sidebar = () => {
  return (
    <div className='flex flex-col w-sidebar h-[calc(100vh-theme(height.footer)-theme(height.navbar))] bg-charcoal' >
      <div className='flex flex-col mx-5 mb-2 pt-7 px-2 pb-3 border-b border-solid border-anchor'>
        <InputSelectorProfile />

        <SidebarQuickIcon />
      </div>

      <div className='flex h-full' style={{ overflow: 'overlay' }}>
        <SidebarMenuList />
      </div>
    </div >
  )
}
