import React from 'react'
// import { Link } from '@reach/router'
import { Router } from 'react-static'
import Routes from 'react-static-routes'
import Header from './components/header'
import Footer from './components/footer'
import history from './utils/routerUtils'

import './app.less'
import './common.less'

// for local
// import '../fonts/nfh2hmc.css'

function App () {
  return (
    <div>
      <Header />
      <Router history={history}>
        <Routes />
      </Router>
      <Footer />
    </div>
  )
}

export default App
