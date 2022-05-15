import { InputGlobalTextSearch } from '@component/InputGlobalTextSearch/InputGlobalTextSearch'
import { InputGlobalSelectorLang } from '@component/InputGlobalSelectorLang/InputGlobalSelectorLang'

export const Navbar = () => {
  return (
    <>
      <div className='flex justify-between items-center w-[calc(theme(width.full)-theme(width.sidebar))] h-navbar bg-shadow shadow-b px-8'>
        <InputGlobalTextSearch />

        <InputGlobalSelectorLang />
      </div>
    </>
  )
}
