import { Container } from 'react-bootstrap'
import Header from './components/header'
import Sidebar from './components/sidebar'
import HomeScreen from './screens/homeScreen'

const App = () => {
  return (
    <div>
      <Header />
      <div className='app_container'>
        <Sidebar />
        <Container fluid className='app_main'>
          <HomeScreen />
        </Container>
      </div>
    </div>
  )
}

export default App
