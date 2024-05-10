
import { Outlet } from 'react-router'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <div>
        <Navbar />
          <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
