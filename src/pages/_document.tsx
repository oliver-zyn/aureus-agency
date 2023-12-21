import { Head, Html, Main, NextScript } from 'next/document'

import Navbar from '@/components/Navbar'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen font-sans antialiased grainy">
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
