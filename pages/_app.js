import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import Wrapper from '../components/Wrapper'
import '../styles/style.scss'
import store from '../store'

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </Provider>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.any.isRequired,
}

export default App
