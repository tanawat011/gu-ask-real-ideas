import { Children } from 'react'

export const ContentWrap = ({ children }) => {
  return (
    <>
      <div className='flex justify-center items-center w-full min-h-[calc(100vh-theme(height.footer)-theme(height.navbar))] bg-shadow -z-10'>
        {children}
      </div>
    </>
  )
}
