import { DefaultLayout } from '@root/src/layouts/DefaultLayout'

export default function Button () {
  return (<>Button</>)
}

Button.getLayout = function getLayout (page) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}
