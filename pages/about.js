import { DefaultLayout } from '@root/src/layouts/DefaultLayout'

export default function About () {
  return (<>About</>)
}

About.getLayout = function getLayout (page) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}
