import { GlobalSearchInput } from '@component/GlobalSearchInput/GlobalSearchInput'
import { GlobalLangInput } from '@component/GlobalLangInput/GlobalLangInput'

export const Navbar = () => {
  return (
    <>
      <div className='flex justify-between items-center w-[calc(theme(width.full)-theme(width.sidebar))] h-navbar bg-shadow shadow-navbar px-8'>
        <GlobalSearchInput />

        <GlobalLangInput />
      </div>
    </>
  )
}
