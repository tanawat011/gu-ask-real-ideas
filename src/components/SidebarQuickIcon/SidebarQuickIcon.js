import Image from 'next/image'

import IconBug from '@icon/bug.png'
import IconChat from '@icon/chat.png'
import IconEmail from '@icon/email.png'
import IconNoti from '@icon/notification.png'

export const SidebarQuickIcon = () => {
  const handleClickNoti = () => console.log('Noti')
  const handleClickChat = () => console.log('Chat')
  const handleClickBug = () => console.log('Bug')
  const handleClickEmail = () => console.log('Email')

  return (
    <div className='flex justify-between items-center mx-1'>
      <a className='cursor-pointer' onClick={handleClickNoti}>
        <Image src={IconNoti} alt='@icon/notification.png' width='16px' height='20px' />
      </a>

      <a className='cursor-pointer' onClick={handleClickChat}>
        <Image src={IconChat} alt='@icon/chat.png' width='18px' height='18px' />
      </a>

      <a className='cursor-pointer' onClick={handleClickBug}>
        <Image src={IconBug} alt='@icon/bug.png' width='18px' height='18px' />
      </a>

      <a className='cursor-pointer' onClick={handleClickEmail}>
        <Image src={IconEmail} alt='@icon/email.png' width='22px' height='16px' />
      </a>
    </div>
  )
}
