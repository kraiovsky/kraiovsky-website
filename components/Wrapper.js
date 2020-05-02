import Head from 'next/head'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import config from '../config'

const { WEBSITE_TITLE } = config()

const Wrapper = ({ children }) => {
  const state = useSelector((state) => state)
  const { pageTitle, darkTheme } = state

  return (
    <>
      <Head>
        <title>
          {WEBSITE_TITLE} - {pageTitle}
        </title>
      </Head>
      <div theme={darkTheme ? 'dark' : 'light'}>{children}</div>
    </>
  )
}

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Wrapper
