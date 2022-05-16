import { DefaultLayout } from '@root/src/layouts/DefaultLayout'

export default function Contact () {
  return (<>Contact</>)
}

Contact.getLayout = function getLayout (page) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}
