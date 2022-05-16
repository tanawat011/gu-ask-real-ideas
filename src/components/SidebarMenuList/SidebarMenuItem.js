import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setMenuSelectedIndexes } from '@redux/baseSlice'

export const SidebarMenuItem = (props) => {
  const {
    item,
    index,
    onClick = () => { },
    parentIndexes = [],
    isChild,
    setMenuItemHeightOfParent = () => { },
  } = props

  const dispatch = useDispatch()
  const storeIndexes = useSelector(state => state.base.sidebarMenuSelectedIndexes)

  const [indexes] = useState([...parentIndexes, index])
  const [menuItem, setMenuItem] = useState({ ...item, isSelected: false, isExpended: false })
  const [wrapChildrenHeight, setWrapChildrenHeight] = useState(`sidebar-menu-item-h-${menuItem.children?.length || 0}`)

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

  const handleItemIsChild = () => isChild ? 'ml-14' : 'ml-5'
  const handleLabelIsChild = () => isChild ? 'ml-3' : 'ml-5'
  const handleHeightMenuItem = (isExpended, childItem) => {
    let classHeight = 'sidebar-menu-item-h-'
    const height = childItem.children?.length || 0
    const wrapHeight = +wrapChildrenHeight[wrapChildrenHeight.length - 1]

    if (isExpended) {
      setWrapChildrenHeight(classHeight + (wrapHeight + height))
    } else {
      setWrapChildrenHeight(classHeight + (wrapHeight - height))
    }
  }

  const RenderContent = () => (
    <div
      className={`flex h-10 pl-5 items-center cursor-pointer hover:text-orange transition-all ease-out duration-300 relative ${handleItemIsChild()} ${storeIndexes === indexes && 'text-orange'}`}
      onClick={handleClickItem}
    >
      {menuItem.children && indexes.length < 3 && (
        <div className={`absolute -left-1 ${indexes.length === 2 && 'opacity-50'}`}>
          <FontAwesomeIcon
            className={`transition-all ease-out duration-300 ${menuItem.isExpended && 'rotate-180'}`}
            icon={faChevronDown} size='xs'
          />
        </div>
      )}

      {indexes.length < 3
        ? (
          <div>
            <FontAwesomeIcon className='w-5 h-5' icon={menuItem.icon} size='lg' />
          </div>
        )
        : (
          <div className='w-5' />
        )
      }

      <span
        className={`text-sm select-none ${handleLabelIsChild()}`}
      >
        {menuItem.label}
      </span>
    </div>
  )

  return (
    <li className={`transition-all ease-out duration-300 ${storeIndexes === indexes && 'bg-anchor'}`}>
      {!menuItem.href
        ? <RenderContent />
        : (
          <Link
            passHref
            href={menuItem.href}
          >
            <div>
              <RenderContent />
            </div>
          </Link>
        )
      }

      {menuItem.children && indexes.length < 3 && (
        <ul className={`transition-all ease-out duration-300 overflow-hidden ${menuItem.isExpended ? `${wrapChildrenHeight}` : 'h-0'}`}>
          {menuItem.children.map((child, j) => (
            <SidebarMenuItem
              key={child.label + index + j}
              parentIndexes={indexes}
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
