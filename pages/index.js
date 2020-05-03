import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import Typed from 'react-typed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitterSquare,
  faLinkedin,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons'
import {
  faToggleOn,
  faToggleOff,
  faCookieBite,
} from '@fortawesome/free-solid-svg-icons'
import { Grid, Cell } from '../components/Layout'
import { setPageTitle, toggleTheme } from '../store/actionCreators'
import config from '../config'

const { BASE_URL } = config()

const pageTitle = 'Profile'

const Home = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const { theme } = state
  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  useEffect(() => {
    dispatch(setPageTitle(pageTitle))
  }, [dispatch])

  return (
    <Grid columns={12} columns-s={6} className="landing" padded>
      <Cell span="5-8" span-s="row">
        <Typed
          strings={['Roman Kraiovsky']}
          typeSpeed={60}
          loop={false}
          className="h1"
        />
      </Cell>
      <Cell span="5-8" span-s="row">
        <p>
          I am a full-time software engineering manager and a rock climbing
          enthusiast.
        </p>
        <p>
          Originally from Ukraine{' '}
          <span role="img" aria-label="ua-flag">
            🇺🇦
          </span>
          , currently living and working in Stockholm, Sweden{' '}
          <span role="img" aria-label="se-flag">
            🇸🇪
          </span>
        </p>
      </Cell>
      <Cell span="5-8" span-s="row" className="get-in-touch">
        <div className="h2">Get in touch</div>
        <span className="social-icon">
          <a alt="github" href="https://github.com/kraiovsky">
            <FontAwesomeIcon
              icon={faGithubSquare}
              text-color="primary"
              size="2x"
            />
          </a>
        </span>
        <span className="social-icon">
          <a alt="linkedin" href="https://www.linkedin.com/in/rkrayovskyy">
            <FontAwesomeIcon icon={faLinkedin} text-color="primary" size="2x" />
          </a>
        </span>
        <span className="social-icon">
          <a alt="twitter" href="https://twitter.com/kraiovsky">
            <FontAwesomeIcon
              icon={faTwitterSquare}
              text-color="primary"
              size="2x"
            />
          </a>
        </span>
        <p />
      </Cell>
      <Cell span="5-8" span-s="row">
        <div className="h2">Projects</div>
        <p>
          <a alt="get-it-done" href="https://github.com/kraiovsky/get-it-done">
            Get It Done
          </a>
          <br />
          Command line and Web tool to assign tasks among your team members.
        </p>
        <p>
          <a alt="get-it-done" href="https://github.com/kraiovsky/exacta">
            Exacta
          </a>
          <br />
          Dead simple JS benchmarking utility.
        </p>
      </Cell>
      <Cell span="5-8" span-s="row">
        <div className="h2">About</div>
        <div className="theme-toggle">
          <Grid columns="4" columns-s="5">
            <Cell span="3" span-s="4">
              <span>
                Toggle dark theme (uses cookies{' '}
                <FontAwesomeIcon
                  icon={faCookieBite}
                  text-color="highlight"
                  size="sm"
                />{' '}
                to remember your choice)
              </span>
            </Cell>
            <Cell span="1" span-s="1">
              <span
                role="button"
                tabIndex="0"
                onClick={handleToggleTheme}
                onKeyPress={handleToggleTheme}
              >
                {theme === 'dark' ? (
                  <FontAwesomeIcon
                    icon={faToggleOn}
                    text-color="primary"
                    size="2x"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faToggleOff}
                    text-color="primary"
                    size="2x"
                  />
                )}
              </span>
            </Cell>
          </Grid>
        </div>
      </Cell>
      <Cell span="5-8" span-s="row">
        <Link href="/about">
          <a alt="about">Learn more about this website</a>
        </Link>
      </Cell>
      <Cell span="5-8" span-s="row">
        &copy; Roman Kraiovsky{' '}
        <a alt="homepage" href={BASE_URL}>
          {BASE_URL}
        </a>
      </Cell>
      <Cell span="row" span-s="row" />
    </Grid>
  )
}

export default Home
