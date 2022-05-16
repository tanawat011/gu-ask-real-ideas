import { DefaultLayout } from '@root/src/layouts/DefaultLayout'

export default function DashboardCrypto () {
  return (<>DashboardCrypto</>)
}

DashboardCrypto.getLayout = function getLayout (page) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}
