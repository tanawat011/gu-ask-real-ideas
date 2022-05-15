import Image from 'next/image'

import IconSearch from '@icon/search.png'

export const InputGlobalTextSearch = () => {
  return (
    <div className='flex border rounded w-96 h-11 px-3 pr-5 bg-anchor'>
      <div className='flex items-center mr-4 w-5'>
        <Image src={IconSearch} alt='@icon/search.png' width='16px' height='16px' />
      </div>

      <input className='text-sm bg-anchor w-full outline-0' placeholder='Search in app...' />
    </div>
  )
}
