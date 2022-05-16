import { DefaultLayout } from '@root/src/layouts/DefaultLayout'

export default function DashboardStock () {
  return (<>DashboardStock</>)
}

DashboardStock.getLayout = function getLayout (page) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}
