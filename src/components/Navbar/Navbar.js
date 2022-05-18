import clsx from 'clsx'

import { InputGlobalTextSearch } from '@component/InputGlobalTextSearch/InputGlobalTextSearch'
import { InputGlobalSelectorLang } from '@component/InputGlobalSelectorLang/InputGlobalSelectorLang'

const twWrapNavbar = clsx(
  'flex',
  'justify-between',
  'items-center',
  'w-[calc(theme(width.full)-theme(width.sidebar))]',
  'h-navbar',
  'bg-shadow',
  'shadow-b',
  'px-8',
  'z-10',
)

export const Navbar = () => {
  return (
    <>
      <div className={twWrapNavbar}>
        <InputGlobalTextSearch />

        <InputGlobalSelectorLang />
      </div>
    </>
  )
}
