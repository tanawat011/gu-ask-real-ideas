import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setMenuSelectedIndexes } from '@redux/baseSlice'

const twWrapItem = (additional) => clsx(
  'transition-all',
  'ease-out',
  'duration-300',
  additional,
)
const twItem = (additional) => clsx(
  'flex',
  'h-10',
  'pl-5',
  'items-center',
  'cursor-pointer',
  'hover:text-orange',
  'transition-all',
  'ease-out',
  'duration-300',
  'relative',
  additional,
)
const twWrapArrow = (additional) => clsx('absolute', '-left-1', additional)
const twArrow = (additional) => clsx(
  'transition-all',
  'ease-out',
  'duration-300',
  additional,
)
const twItemIcon = () => clsx('w-5', 'h-5')
const twItemLabel = (additional) => clsx('text-sm', 'select-none', additional)
const twWrapChildrenItem = (additional) => clsx(
  'transition-all',
  'ease-out',
  'duration-300',
  'overflow-hidden',
  additional,
)

export const SidebarMenuItem = (props) => {
  const {
    item,
    index,
    onClick = () => { },
    parentIndexes = [],
    parentPath = '',
    isChild,
    setMenuItemHeightOfParent = () => { },
  } = props

  const dispatch = useDispatch()
  const storeIndexes = useSelector(state => state.base.sidebarMenuSelectedIndexes)

  const [indexes] = useState([...parentIndexes, index])
  const [path] = useState(parentPath + (item.href || ''))
  const [menuItem, setMenuItem] = useState({ ...item, isSelected: false, isExpended: false })
  const [wrapChildrenHeight, setWrapChildrenHeight] = useState(menuItem.children?.length || 0)

  const handleClickItem = () => {
    const isSelected = !menuItem.isSelected
    const isExpended = !menuItem.isExpended

    if (indexes.length === 2) {
      setMenuItemHeightOfParent(isExpended, menuItem)
    }

    if (!menuItem.children) {
      onClick()
      dispatch(setMenuSelectedIndexes(indexes))
      setMenuItem({ ...menuItem, isSelected })
    } else {
      setMenuItem({ ...menuItem, isExpended })
    }
  }

  const handleHeightMenuItem = (isExpended, childItem) => {
    const height = childItem.children?.length || 0

    if (isExpended) {
      setWrapChildrenHeight(wrapChildrenHeight + height)
    } else {
      setWrapChildrenHeight(wrapChildrenHeight - height)
    }
  }

  const handleItemIsChild = () => isChild ? 'ml-14' : 'ml-5'
  const handleLabelIsChild = () => isChild ? 'ml-3' : 'ml-5'
  const handleWrapChildrenItemClass = `sidebar-menu-item-h-${wrapChildrenHeight}`
  const twWrapItemClass = twWrapItem([storeIndexes === indexes && 'bg-anchor'])
  const twItemClass = twItem([handleItemIsChild(), storeIndexes === indexes && 'text-orange'])
  const twWrapArrowClass = twWrapArrow([indexes.length === 2 && 'opacity-50'])
  const twArrowClass = twArrow([menuItem.isExpended && 'rotate-180'])
  const twItemIconClass = twItemIcon()
  const twItemLabelClass = twItemLabel([handleLabelIsChild()])
  const twWrapChildrenItemClass = twWrapChildrenItem(menuItem.isExpended ? handleWrapChildrenItemClass : 'h-0')

  const RenderContent = () => (
    <div className={twItemClass} onClick={handleClickItem}>
      {menuItem.children && indexes.length < 3 && (
        <div className={twWrapArrowClass}>
          <FontAwesomeIcon className={twArrowClass} icon={faChevronDown} size='xs' />
        </div>
      )}

      {indexes.length < 3
        ? (
          <div>
            <FontAwesomeIcon className={twItemIconClass} icon={menuItem.icon} size='lg' />
          </div>
        )
        : (
          <div className='w-5' />
        )
      }

      <span
        className={twItemLabelClass}
      >
        {menuItem.label}
      </span>
    </div>
  )

  return (
    <li className={twWrapItemClass}>
      {!menuItem.href || menuItem.children
        ? <RenderContent />
        : (
          <Link
            passHref
            href={path}
          >
            <div>
              <RenderContent />
            </div>
          </Link>
        )
      }

      {menuItem.children && indexes.length < 3 && (
        <ul className={twWrapChildrenItemClass}>
          {menuItem.children.map((child, j) => (
            <SidebarMenuItem
              key={child.label + index + j}
              parentIndexes={indexes}
              parentPath={path}
              item={child}
              index={j}
              onClick={child.onClick}
              isChild
              setMenuItemHeightOfParent={handleHeightMenuItem}
            />
          ))}
        </ul>
      )}
    </li>
  )
}
