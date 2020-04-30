import { Grid, Cell } from '../components/Layout'

const Custom404 = () => {
  return (
    <Grid columns={12} columns-s={6}>
      <Cell span="row" span-s="row" />
      <Cell span="row" span-s="row" center>
        404 - Page Not Found
      </Cell>
      <Cell span="row" span-s="row" />
    </Grid>
  )
}

export default Custom404
