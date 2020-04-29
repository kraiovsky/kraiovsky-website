import Document, { Html, Head, Main, NextScript } from 'next/document'
import config from '../config'

const { WEBSITE_TITLE } = config()

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>{WEBSITE_TITLE}</title>
          <link rel="icon" href="/assets/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
