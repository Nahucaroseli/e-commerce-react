import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router';
import Cart from './Cart';
import { CartContext } from '../context/cart.context';

function Header() {



// Estados para controlar el estado del menú y del carrito
const [isMenuActive, setIsMenuActive] = useState(false);
const {totalItems} = useContext(CartContext);
let [filter, setFilter] = useState("");
const location = useLocation();

// Funciones para alternar los menús
const toggleMenu = () => {
  setIsMenuActive(!isMenuActive);
};

const toggleCart = () => {
  const cart = document.querySelector("#cart");
  cart.classList.toggle("activeCart")
};

// Función para actualizar el filtro y navegar

useEffect(() => {
  const path = location.pathname; // Obtén el path actual
  const category = path.split('/')[1]; // Suponiendo que la categoría está en la ruta
  if (category) {
    setFilter(category);  // Actualiza el filtro según la ruta
  }
}, [location]);


return (
  <>
  <nav className="bg-black text-white fixed w-full z-10 border-b-0">
    <div className="container mx-auto flex justify-between items-center p-4">
      <div className="text-2xl font-bold">
        <Link onClick={() =>setFilter(``)} to={`/`}>
          Compra Fácil
        </Link>
      </div>

      <div id="menu" className={`menu ${isMenuActive ? 'active' : ''}`}>
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

      <div className="flex flex-row justify-around w-20">
        <a
          id="cart_button"
          className="hover:text-blue-300 hover:cursor-pointer"
          onClick={toggleCart}
        >
          <p>{totalItems}</p>
          <i className="fas fa-shopping-cart text-xl"></i>
        </a>
        <a className='hover:text-blue-300 hover:cursor-pointer'>
        <i class="fa-solid fa-user text-xl"></i>
        </a>
        <a
          className="hover:text-blue-300 md:hidden hover:cursor-pointer"
          onClick={toggleMenu}
        >
          <i className="fa-sharp fa-solid fa-bars text-2xl"></i>
        </a>
      </div>
    </div>
  </nav>
  </>
);
}


export default Header