import '@assets/main.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import theme from '../styles/theme';

import { Layout } from '@components/common';
import React, { useEffect, useState } from 'react';
import {
  orange,
  lightBlue,
  deepOrange,
  deepPurple
} from '@material-ui/core/colors';

export type DarkProps = {
  darkState: boolean;
};

function MyApp({ Component, pageProps }: AppProps) {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? 'dark' : 'light';
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Layout darkState={darkState} handleThemeChange={handleThemeChange}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
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

export default MyApp;
