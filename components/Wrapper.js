import Head from 'next/head'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { GlobalCssVars } from '../styles/globalCssVars'
import { lightTheme, darkTheme } from '../styles/themes'
import config from '../config'

const { WEBSITE_TITLE } = config()

const Wrapper = ({ children }) => {
  const state = useSelector((state) => state)
  const { pageTitle, theme } = state

  return (
    <>
      <Head>
        <title>
          {WEBSITE_TITLE} - {pageTitle}
        </title>
      </Head>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalCssVars />
        {children}
      </ThemeProvider>
    </>
  )
}

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Wrapper
