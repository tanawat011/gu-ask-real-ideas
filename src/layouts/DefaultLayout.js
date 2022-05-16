import Head from 'next/head'

import { ContentWrap } from '@component/ContentWrap/ContentWrap'
import { Footer } from '@component/Footer/Footer'
import { Navbar } from '@component/Navbar/Navbar'
import { NavLogo } from '@component/NavLogo/NavLogo'
import { RightSidebar } from '@component/RightSidebar/RightSidebar'
import { Sidebar } from '@component/Sidebar/Sidebar'
import { SidebarFooter } from '@component/SidebarFooter/SidebarFooter'
import { BackDrop } from '@component/Backdrop/Backdrop'

export const DefaultLayout = ({ children }) => {

  return (
    <>
      <Head>
        <title>GuAskReal</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <div className='default-layout flex flex-col w-full h-full text-smoke font-noir_pro'>
        <BackDrop />

        <RightSidebar />

        <div className='flex w-full'>
          <NavLogo />
          <Navbar />
        </div>

        <div className='flex w-full'>
          <div className='flex flex-col h-full'>
            <Sidebar />
            <SidebarFooter />
          </div>

          <div className='flex flex-col w-full h-full'>
            <ContentWrap>
              {children}
            </ContentWrap>

            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
