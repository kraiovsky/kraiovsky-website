import { Grid, Cell } from '../components/Layout'

const Error = () => {
  return (
    <Grid columns={12} columns-s={6}>
      <Cell span="row" span-s="row" />
      <Cell span="row" span-s="row" center>
        500 - Internal Server Error
      </Cell>
      <Cell span="row" span-s="row" />
    </Grid>
  )
}

export default Error
