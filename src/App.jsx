import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route  path='/:filter'  element={<Home></Home>}/>
      <Route  path='/products/:id'  element={<ProductDetails></ProductDetails>}/>
    </Routes>
    
  )
}

export default App
