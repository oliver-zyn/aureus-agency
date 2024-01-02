import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Aureus Agency</title>
      </Head>
      <body className="min-h-screen font-sans antialiased grainy">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
