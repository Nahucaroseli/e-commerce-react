import React from 'react'
import { Link } from 'react-router';

function Header() {



let filter = ``;

const toggleMenu = () =>{
    let menu = document.querySelector("#menu");
    menu.classList.toggle("menu");
}


return (
    <nav className="bg-black text-white fixed w-full z-10 border-b-0">
    <div className="container mx-auto flex justify-between items-center p-4">
      <div className="text-2xl font-bold">
        <Link onClick={filter = ` `} to={`/`}>
          Compra Fácil
        </Link>
      </div>

      <div id="menu" className="md:flex space-x-6 hidden z-10">
        <Link onClick={filter=`men's clothing`} to={`/${filter}`} className='hover:underline underline-offset-4'>
        
              ROPA DE HOMBRE
        </Link>
        <Link  onClick={filter=`women's clothing`} to={`/${filter}`} className='hover:underline underline-offset-4'>

              ROPA DE MUJER
          
        </Link>
        <Link onClick={filter=`electronics`} to={`/${filter}`} className='hover:underline underline-offset-4'>
    
              TECNOLOGIA
      
        </Link>
        <Link onClick={filter=`jewelery`} to={`/${filter}`}  className='hover:underline underline-offset-4'>
              JOYERIA
        </Link>
      </div>

      <div className='flex flex-row justify-around w-20'>
        <a href="#" className="hover:text-blue-300">
          <i className="fas fa-shopping-cart text-xl"></i>
        </a>
        <a href="#" className="hover:text-blue-300 md:hidden" onClick={toggleMenu}>
            <i className="fa-sharp fa-solid fa-bars text-2xl"></i>
        </a>
      </div>

    </div>
  </nav>
)
}


export default Header