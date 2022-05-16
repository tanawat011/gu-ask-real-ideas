import { DefaultLayout } from '@root/src/layouts/DefaultLayout'

export default function DashboardWallet () {
  return (<>DashboardWallet</>)
}

DashboardWallet.getLayout = function getLayout (page) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}
