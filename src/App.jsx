import './App.css'
import { Routes, Route, Router } from 'react-router'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import toast, { Toaster } from 'react-hot-toast'

function App() {


  return (
      <>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route  path='/:filter'  element={<Home></Home>}/>
          <Route  path='/products/:id'  element={<ProductDetails></ProductDetails>}/>
        </Routes>
        <Toaster/>
      </>
    
  )
}

export default App
