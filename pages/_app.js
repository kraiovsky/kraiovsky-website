import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { config as faConfig } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/style.scss'
import store from '../store'
import Wrapper from '../components/Wrapper'

faConfig.autoAddCss = false

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
