import { useEffect, useState } from 'react'
import ky from 'ky-universal'
import { useDispatch } from 'react-redux'
import { Grid, Cell } from '../components/Layout'
import { setPageTitle } from '../store/actionCreators'

const pageTitle = 'home'

const Home = () => {
  const dispatch = useDispatch()
  const [pingSuccess, setPingSuccess] = useState()

  useEffect(() => {
    const healthcheck = async () => {
      try {
        const { status } = await ky.get('/api/ping')
        if (status === 200) setPingSuccess('up')
        return true
      } catch (error) {
        console.log(error)
        setPingSuccess('down')
      }
    }
    dispatch(setPageTitle(pageTitle))
    healthcheck()
  }, [dispatch, setPingSuccess])

  return (
    <Grid columns={12} columns-s={6}>
      <Cell span="row" span-s="row">
        <p>Hello world!</p>
        <p>API healthchek: {pingSuccess || 'pinging...'}</p>
      </Cell>
    </Grid>
  )
}

export default Home
