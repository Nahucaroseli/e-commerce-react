import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'

function App() {

  return (
    <Routes>
      <Route path='' element={<Home></Home>}/>
    </Routes>
    
  )
}

export default App
