import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import ky from 'ky-universal'
import Typed from 'react-typed'
import Markdown from 'react-markdown'
import { Grid, Cell } from '../components/Layout'
import Healthcheck from '../components/Healthcheck'
import { setPageTitle } from '../store/actionCreators'
import Readme from '../README.md'

const pageTitle = 'About'

const About = () => {
  const dispatch = useDispatch()
  const [pingSuccess, setPingSuccess] = useState()

  useEffect(() => {
    const healthcheck = async () => {
      try {
        const { status } = await ky.get('/api/ping')
        if (status === 200) setPingSuccess(true)
        return true
      } catch (error) {
        console.log(error)
        setPingSuccess(false)
      }
    }
    dispatch(setPageTitle(pageTitle))
    healthcheck()
  }, [dispatch, setPingSuccess])

  return (
    <Grid columns={12} columns-s={6} className="about" padded>
      <Cell span="5-8" span-s="row">
        <Typed strings={['About']} typeSpeed={60} loop={false} className="h1" />
      </Cell>
      <Cell span="5-8" span-s="row">
        <Markdown source={Readme} />
      </Cell>
      <Cell span="5-8" span-s="row">
        This page is rendered from <code>README.md</code> with
        <a
          alt="react-markdown"
          href="https://github.com/rexxars/react-markdown"
        >
          react-markdown
        </a>{' '}
        and{' '}
        <a
          alt="raw-loader"
          href="https://github.com/webpack-contrib/raw-loader"
        >
          raw-loader
        </a>
      </Cell>
      <Cell span="5-8" span-s="row">
        <Healthcheck status={pingSuccess} />
      </Cell>
      <Cell span="5-8" span-s="row">
        <Link href="/">
          <a alt="home"> Back home</a>
        </Link>
      </Cell>
      <Cell span="row" span-s="row" />
    </Grid>
  )
}

export default About
