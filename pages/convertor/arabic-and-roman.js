import { DefaultLayout } from '@root/src/layouts/DefaultLayout'
import { ArabicAndRoman as Container } from '@root/src/containers/convertor/ArabicAndRoman'

export default function ArabicAndRoman () {
  return (<Container />)
}

ArabicAndRoman.getLayout = function getLayout (page) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}
