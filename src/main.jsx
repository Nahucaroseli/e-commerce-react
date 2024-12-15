import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { CartContext, CartContextWrapper } from '/src/context/cart.context.jsx';
import { UserContextWrapper } from './context/user.context.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserContextWrapper>
      <CartContextWrapper>
          <App />
      </CartContextWrapper>
    </UserContextWrapper>
  </BrowserRouter>

)
