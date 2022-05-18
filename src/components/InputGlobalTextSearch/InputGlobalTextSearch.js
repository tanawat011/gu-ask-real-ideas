import clsx from 'clsx'
import Image from 'next/image'

import IconSearch from '@icon/search.png'

const twInputTextSearch = clsx(
  'flex',
  'border',
  'rounded',
  'w-96',
  'h-11',
  'px-3',
  'pr-5',
  'bg-anchor',
)
const twIcon = clsx(
  'flex',
  'items-center',
  'mr-4',
  'w-5',
)
const twInput = clsx(
  'text-sm',
  'bg-anchor',
  'w-full',
  'outline-0',
)

export const InputGlobalTextSearch = () => {
  return (
    <div className={twInputTextSearch}>
      <div className={twIcon}>
        <Image src={IconSearch} alt='@icon/search.png' width='16px' height='16px' />
      </div>

      <input className={twInput} placeholder='Search in app...' />
    </div>
  )
}
