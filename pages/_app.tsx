import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeCustomProvider, Head } from '@components/common'
import { Layout } from '@components/common'
import themeConfig from '@components/common/Theme/config'
import { createMuiTheme, CssBaseline } from '@material-ui/core'
// import { Provider as NextAuthProvider } from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  const theme = themeConfig

  return (
    <>
      <Head />
      <ThemeCustomProvider theme={theme}>
        <CssBaseline />
        <Layout>
          {/* <NextAuthProvider session={pageProps.session}> */}
          <Component {...pageProps} />
          {/* </NextAuthProvider> */}
        </Layout>
      </ThemeCustomProvider>
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
