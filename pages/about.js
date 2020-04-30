import { Grid, Cell } from '../components/Layout'

const About = () => {
  return (
    <Grid columns={12} columns-s={6}>
      <Cell span="row" span-s="row" />
      <Cell span="row" span-s="row" center>
        Favicon credits:{' '}
        <a href="https://www.freepik.com/free-photos-vectors/background">
          Background vector created by teravector - www.freepik.com
        </a>
      </Cell>
      <Cell span="row" span-s="row" />
    </Grid>
  )
}

export default About
