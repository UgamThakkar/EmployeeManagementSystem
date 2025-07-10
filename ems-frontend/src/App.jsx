import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
      
      <Routes>
        <Route path='/' element ={ <ListEmployeeComponent />}></Route>
        <Route path='/employees' element ={ <ListEmployeeComponent />}></Route>
      </Routes>

      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
