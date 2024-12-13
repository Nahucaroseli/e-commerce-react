import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router';
import Cart from './Cart';
import { CartContext } from '../context/cart.context';

function Header() {




const [isMenuActive, setIsMenuActive] = useState(false);
let [filter, setFilter] = useState("");
const location = useLocation();
const {products} = useContext(CartContext);
const [totalitemsCount,setTotalItemsCount] = useState("");

const usuarioGuardado = localStorage.getItem('user');
const usuario = JSON.parse(usuarioGuardado);

const toggleMenu = () => {
  setIsMenuActive(!isMenuActive);
};

const toggleCart = () => {
  const cart = document.querySelector("#cart");
  cart.classList.toggle("activeCart")
};


useEffect(() =>{
    const generatedHTML = () =>{
      return(
        <div className=' -ml-2 -mt-3 bg-white text-black h-5 rounded-2xl w-5'>
          <p className='-mt-1 ml-1.5 font-bold'>{products.length}</p>
        </div>
      )
    }
    
    setTotalItemsCount(generatedHTML);
 
},[products]);

useEffect(() => {
  const path = location.pathname; 
  const category = path.split('/')[1]; 
  if (category) {
    setFilter(category); 
  }
}, [location]);


return (
  <>
  <nav className="bg-black text-white fixed w-full z-10 border-b-0">
    <div className="container mx-auto flex justify-between items-center p-4">
      <div className='flex flex-row md:hidden'>
        <a
          id="cart_button"
          className="hover:text-blue-300 hover:cursor-pointer"
          onClick={toggleCart}>

          <i className="fas fa-shopping-cart text-xl"></i>

        </a>
          {totalitemsCount}
        </div>
      <div className="text-2xl font-bold">
        <Link onClick={() =>setFilter(``)} to={`/`}>
          COMPRA FACIL
        </Link>
      </div>

      <div id="menu" className={`menu ${isMenuActive ? 'active' : ''}`}>
      <i onClick={toggleMenu} className="fa-solid fa-xmark absolute text-xl top-6 right-5 md:top-6 md:right-50 hover:cursor-pointer md:hidden"></i>
        <Link
          onClick={() =>setFilter(`men's clothing`)}
          to={`/men's clothing`}
          className="hover:underline underline-offset-4"
        >
          ROPA DE HOMBRE
        </Link>
        <Link
          onClick={() =>setFilter(`women's clothing`)}
          to={`/women's clothing`}
          className="hover:underline underline-offset-4"
        >
          ROPA DE MUJER
        </Link>
        <Link
          onClick={() =>setFilter(`electronics`)}
          to={`/electronics`}
          className="hover:underline underline-offset-4"
        >
          TECNOLOGIA
        </Link>
        <Link
          onClick={() =>setFilter(`jewelery`)}
          to={`/jewelery`}
          className="hover:underline underline-offset-4"
        >
          JOYERIA
        </Link>
      </div>
      <div className="flex flex-row justify-between md:w-20 gap-x-3">
        <div className='flex flex-row hidden md:flex'>
          <a
            id="cart_button"
            className="hover:text-blue-300 hover:cursor-pointer"
            onClick={toggleCart}>

            <i className="fas fa-shopping-cart text-xl"></i>
          </a>
            {totalitemsCount}
        </div>

        {!usuario &&
          <Link to={"/login"} className='hover:text-blue-300 hover:cursor-pointer'>
            <i className="fa-solid fa-user text-xl"></i>
          </Link>
        }
        {usuario &&
          <Link to={"/account"} className='hover:text-blue-300 hover:cursor-pointer'>
            <i className="fa-solid fa-user text-xl"></i>
          </Link>
        }

        <a className="hover:text-blue-300 md:hidden hover:cursor-pointer"
          onClick={toggleMenu}>
          <i className="fa-sharp fa-solid fa-bars text-2xl"></i>
        </a>
      </div>
    </div>
  </nav>
  </>
);
}


export default Header