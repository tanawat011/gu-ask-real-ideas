import Link from 'next/link'

import { FreeSpaceLayout } from '@root/src/layouts/FreeSpaceLayout'

export default function Login () {
  return (
    <>
      Login
      <Link href='/' passHref>
        Login
      </Link>
    </>
  )
}

Login.getLayout = function getLayout (page) {
  return (
    <FreeSpaceLayout>
      {page}
    </FreeSpaceLayout>
  )
}
