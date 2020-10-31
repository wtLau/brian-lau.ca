import './reset.css'
import './base.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { orange, yellow } from '@material-ui/core/colors'
import 'fontsource-roboto'

import Layout from './Layout'
import * as serviceWorker from './serviceWorker'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[300],
    },
    secondary: {
      main: yellow[900],
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
