import clsx from 'clsx'

import { InputSelectorProfile } from '@component/InputSelectorProfile/InputSelectorProfile'
import { SidebarMenuList } from '@component/SidebarMenuList/SidebarMenuList'
import { SidebarQuickIcon } from '@component/SidebarQuickIcon/SidebarQuickIcon'

const twWrapSidebar = clsx(
  'flex',
  'flex-col',
  'w-sidebar',
  'h-[calc(100vh-theme(height.footer)-theme(height.navbar))]',
  'bg-charcoal',
)
const twWrapProfile = clsx(
  'flex',
  'flex-col',
  'mx-5',
  'mb-2',
  'pt-7',
  'px-2',
  'pb-3',
  'border-b',
  'border-solid',
  'border-anchor',
)
const twWrapMenu = clsx(
  'flex',
  'h-full',
)

export const Sidebar = () => {
  return (
    <div className={twWrapSidebar}>
      <div className={twWrapProfile}>
        <InputSelectorProfile />

        <SidebarQuickIcon />
      </div>

      <div className={twWrapMenu} style={{ overflow: 'overlay' }}>
        <SidebarMenuList />
      </div>
    </div >
  )
}
