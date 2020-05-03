import { useEffect } from 'react'
import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { parseCookies } from 'nookies'
import { ThemeProvider } from 'styled-components'
import { toggleTheme } from '../store/actionCreators'
import { GlobalCssVars } from '../styles/globalCssVars'
import { lightTheme, darkTheme } from '../styles/themes'
import config from '../config'

const { WEBSITE_TITLE } = config()

const Wrapper = ({ children }) => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const { pageTitle, theme } = state

  const { theme: savedTheme } = parseCookies()
  useEffect(() => {
    if (savedTheme && theme !== savedTheme) {
      dispatch(toggleTheme())
    }
  }, [dispatch, savedTheme, theme])

  return (
    <>
      <Head>
        <title>
          {WEBSITE_TITLE} - {pageTitle}
        </title>
      </Head>
      <ThemeProvider theme={savedTheme === 'dark' ? darkTheme : lightTheme}>
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
