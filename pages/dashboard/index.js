import { DefaultLayout } from '@root/src/layouts/DefaultLayout'

export default function Dashboard () {
  return (<>Dashboard</>)
}

Dashboard.getLayout = function getLayout (page) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}
