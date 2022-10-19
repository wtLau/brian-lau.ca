import 'styles/global.css'

import { MDXProvider } from '@mdx-js/react'
import { CssBaseline } from '@mui/material'
import { Provider as NextAuthProvider } from 'next-auth/client'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'

import MDXComponents from '@components/blog/BlogContent'
import { ThemeCustomProvider, Head } from '@components/common'
import themeConfig from '@components/common/Theme/config'
import AppLayout from '@components/layout/AppLayout'
import * as gtag from '@lib/gtag'

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
          <AppLayout>
            <MDXProvider components={MDXComponents}>
              <Component {...pageProps} />
            </MDXProvider>
          </AppLayout>
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
