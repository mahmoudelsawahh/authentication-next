import { Provider } from 'react-redux'
import '../styles/globals.css'
import Store from '../Redux/Store'
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Provider store={Store}>
    <Component {...pageProps} />
    </Provider>
    </>
  )
}

export default MyApp
