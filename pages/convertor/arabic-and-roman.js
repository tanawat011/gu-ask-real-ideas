import { DefaultLayout } from '@root/src/layouts/DefaultLayout'
import { ArabicToRoman as Container } from '@container/convertor/ArabicToRoman'

export default function ArabicToRoman () {
  return (<Container />)
}

ArabicToRoman.getLayout = function getLayout (page) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}
