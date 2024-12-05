import './App.css'
import { Routes, Route, Router } from 'react-router'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import { Toaster } from 'react-hot-toast'
import Login from './pages/Login'

function App() {


  return (
      <>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route  path='/:filter'  element={<Home></Home>}/>
          <Route  path='/products/:id'  element={<ProductDetails></ProductDetails>}/>
          <Route  path='/login'  element={<Login></Login>}/>
        </Routes>
        <Toaster/>
      </>
    
  )
}

export default App
