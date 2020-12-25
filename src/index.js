import './reset.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import 'fontsource-roboto'

import Layout from './Layout'
import * as serviceWorker from './serviceWorker'

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1110,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#A67212',
    },
    secondary: {
      main: '#F2CB57',
    },
    text: {
      primary: '#000',
      secondary: '#A2E4F2',
    },
  },
  typography: {
    h1: {
      fontSize: '3.125rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.375rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 400,
    },
    body1: {
      lineHeight: '1.12rem',
    },
  },
})
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
