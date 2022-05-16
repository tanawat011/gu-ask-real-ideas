import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends NextDocument {
  render () {
    return (
      <Html lang='js'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
