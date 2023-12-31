import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Heading from './assets/components/Heading'
import Login from './assets/components/Login'
import Register from './assets/components/Register'
import './styles.css'
import Logout from './assets/components/Logout'




function App(): JSX.Element {
  
  

  return (
    
    <BrowserRouter>
    <Heading />
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/logout' element={<Logout />}/>
      <Route path='*' element={<Navigate to='/' />}/>
    </Routes>
    </BrowserRouter>
    
    
    
  )
}

export default App
