import Head from 'next/head'

export const FreeSpaceLayout = ({ children }) => {

  return (
    <>
      <Head>
        <title>Login GuAskReal</title>

        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <div className='default-layout flex flex-col w-full h-full text-smoke font-noir_pro'>
        {children}
      </div>
    </>
  )
}
