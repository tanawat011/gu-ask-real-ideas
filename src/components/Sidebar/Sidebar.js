import { InputSelectorProfile } from '@component/InputSelectorProfile/InputSelectorProfile'
import { SidebarQuickIcon } from '@component/SidebarQuickIcon/SidebarQuickIcon'

export const Sidebar = () => {
  return (
    <div className='flex flex-col w-sidebar h-[calc(100vh-theme(height.footer)-theme(height.navbar))] bg-charcoal'>
      <div className='flex flex-col mx-5 mb-3 pt-8 px-3 pb-3 border-b border-solid border-anchor'>
        <InputSelectorProfile />

        <SidebarQuickIcon />
      </div>

      <div>
        Menu
      </div>
    </div>
  )
}
