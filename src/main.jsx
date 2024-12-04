import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { CartContext, CartContextWrapper } from '/src/context/cart.context.jsx';

createRoot(document.getElementById('root')).render(

  <CartContextWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartContextWrapper>

)
