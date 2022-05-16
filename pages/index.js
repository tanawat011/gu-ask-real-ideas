import { DefaultLayout } from '@root/src/layouts/DefaultLayout'

export default function Index () {
  return (<>Dashboard</>)
}

Index.getLayout = function getLayout (page) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}
