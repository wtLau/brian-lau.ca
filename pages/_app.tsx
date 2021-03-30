import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeCustomProvider, Head } from '@components/common'
import { Layout } from '@components/common'
import themeConfig from '@components/common/Theme/config'
import { createMuiTheme, CssBaseline } from '@material-ui/core'
import { Provider as NextAuthProvider } from 'next-auth/client'
import { useRouter } from 'next/dist/client/router'
import * as gtag from '@lib/gtag'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '@components/blog/BlogContent'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const theme = themeConfig

  useEffect(() => {
    document.body.classList?.remove('loading')

    // Google Analytics tacking page view s and events
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head />
      <NextAuthProvider session={pageProps.session}>
        <ThemeCustomProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <MDXProvider components={MDXComponents}>
              <Component {...pageProps} />
            </MDXProvider>
          </Layout>
        </ThemeCustomProvider>
      </NextAuthProvider>
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
