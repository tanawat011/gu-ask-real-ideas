import clsx from 'clsx'
import Head from 'next/head'

import { ContentWrap } from '@component/ContentWrap/ContentWrap'
import { Footer } from '@component/Footer/Footer'
import { Navbar } from '@component/Navbar/Navbar'
import { NavLogo } from '@component/NavLogo/NavLogo'
import { RightSidebar } from '@component/RightSidebar/RightSidebar'
import { Sidebar } from '@component/Sidebar/Sidebar'
import { SidebarFooter } from '@component/SidebarFooter/SidebarFooter'
import { BackDrop } from '@component/Backdrop/Backdrop'

const twWrapLayout = clsx(
  'default-layout',
  'flex',
  'flex-col',
  'w-full',
  'h-full',
  'text-smoke',
  'font-noir_pro',
)
const twFullW = clsx('flex', 'w-full')
const twColFullH = clsx(
  'flex',
  'flex-col',
  'h-full',
)
const twColFull = clsx(
  'flex',
  'flex-col',
  'w-full',
  'min-h-full',
  'max-h-[calc(100vh-theme(height.navbar))]',
  'bg-shadow',
)

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>GuAskReal</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <div className={twWrapLayout}>
        <BackDrop />

        <RightSidebar />

        <div className={twFullW}>
          <NavLogo />
          <Navbar />
        </div>

        <div className={twFullW}>
          <div className={twColFullH}>
            <Sidebar />
            <SidebarFooter />
          </div>

          <div className={twColFull} style={{ overflowY: 'overlay' }}>
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
