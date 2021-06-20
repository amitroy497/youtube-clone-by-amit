import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import './_app.scss'
import Header from './components/header'
import Sidebar from './components/sidebar'
import HomeScreen from './screens/homeScreen'
import LoginScreen from './screens/loginScreen'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false)

  const handleToggleSidebar = () => {
    toggleSidebar((value) => {
      return !value
    })
  }

  return (
    <div>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className='app_container'>
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className='app_main'>
          {children}
        </Container>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>
        <Route path='/auth'>
          <LoginScreen />
        </Route>
        <Route path='/search'>
          <h1>Search results</h1>
        </Route>
        <Route>
          <Redirect to='/'></Redirect>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
