import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const SidebarMenuItem = (props) => {
  const {
    item,
    index,
    onClick = () => { },
    parentLevel,
    isChild,
    setMenuItemHeightOfParent = () => { },
  } = props

  const [level, setLevel] = useState(1)
  const [menuItem, setMenuItem] = useState({ ...item, isSelected: false })
  const [wrapChildrenHeight, setWrapChildrenHeight] = useState(`sidebar-menu-item-h-${menuItem.children?.length || 0}`)

  useEffect(() => {
    if (isChild) {
      setLevel(parentLevel + 1)
    }
  }, [isChild, parentLevel])

  const handleClickItem = () => {
    const isSelected = !menuItem.isSelected
    if (level === 2) {
      setMenuItemHeightOfParent(isSelected, menuItem)
    }

    setMenuItem({ ...menuItem, isSelected: isSelected })

    if (!menuItem.children) {
      onClick()
    }
  }

  const handleItemIsChild = () => isChild ? 'ml-14' : 'ml-5'
  const handleLabelIsChild = () => isChild ? 'ml-3' : 'ml-5'
  const handleHeightMenuItem = (isSelected, childItem) => {
    let classHeight = 'sidebar-menu-item-h-'
    const height = childItem.children?.length || 0
    const wrapHeight = +wrapChildrenHeight[wrapChildrenHeight.length - 1]

    if (isSelected) {
      setWrapChildrenHeight(classHeight + (wrapHeight + height))
    } else {
      setWrapChildrenHeight(classHeight + (wrapHeight - height))
    }
  }

  const RenderContent = () => (
    <>
      {menuItem.children && level < 3 && (
        <div className={`absolute -left-5 ${level === 2 && 'opacity-50'}`}>
          <FontAwesomeIcon
            className={`transition-all ease-out duration-300 ${menuItem.isSelected && 'rotate-180'}`}
            icon={faChevronDown} size='xs'
          />
        </div>
      )}

      {level < 3
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
    </>
  )

  return (
    <li>
      {!menuItem.href
        ? (
          <div
            className={`flex h-10 items-center cursor-pointer hover:text-orange transition-all ease-out duration-300 relative ${handleItemIsChild()}`}
            onClick={handleClickItem}
          >
            <RenderContent />
          </div>
        )
        : (
          <Link
            passHref
            href={menuItem.href}
          >
            <div
              className={`flex h-10 items-center cursor-pointer hover:text-orange transition-all ease-out duration-300 relative ${handleItemIsChild()}`}
              onClick={handleClickItem}
            >
              <RenderContent />
            </div>
          </Link>
        )
      }

      {menuItem.children && level < 3 && (
        <ul className={`transition-all ease-out duration-900 overflow-hidden ${menuItem.isSelected ? `${wrapChildrenHeight}` : 'h-0'}`}>
          {menuItem.children.map((child, j) => (
            <SidebarMenuItem
              key={child.label + index + j}
              parentIndex={index}
              parentLevel={level}
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
