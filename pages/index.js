import { Provider } from 'react-redux'

import { DefaultLayout } from '@layout/Default'
import store from '@redux/store'

export default function Home () {
  return (
    <Provider store={store}>
      <DefaultLayout />
    </Provider>
  )
}
