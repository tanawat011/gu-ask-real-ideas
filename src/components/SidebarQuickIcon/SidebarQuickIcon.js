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
    <div className='flex justify-between items-center'>
      <a className='cursor-pointer' onClick={handleClickNoti}>
        <Image src={IconNoti} alt='@icon/notification.png' width='20px' height='24px' />
      </a>

      <a className='cursor-pointer' onClick={handleClickChat}>
        <Image src={IconChat} alt='@icon/chat.png' width='20px' height='20px' />
      </a>

      <a className='cursor-pointer' onClick={handleClickBug}>
        <Image src={IconBug} alt='@icon/bug.png' width='20px' height='20px' />
      </a>

      <a className='cursor-pointer' onClick={handleClickEmail}>
        <Image src={IconEmail} alt='@icon/email.png' width='24px' height='18px' />
      </a>
    </div>
  )
}
