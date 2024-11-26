import React from 'react'

function Header() {




const toggleMenu = () =>{
    let menu = document.querySelector("#menu");
    menu.classList.toggle("menu");
}


return (
    <nav className="bg-black text-white">
    <div className="container mx-auto flex justify-between items-center p-4">
      <div className="text-2xl font-bold">
        <a href="#" className="">
          Compra Fácil
        </a>
      </div>

      <div id="menu" className="md:flex space-x-6 hidden">
        <a href="#" className="hover:underline underline-offset-4">
          ROPA DE HOMBRE
        </a>
        <a href="#" className="hover:underline underline-offset-4">
          ROPA DE MUJER
        </a>
        <a href="#" className="hover:underline underline-offset-4">
          TECNOLOGIA
        </a>
        <a href="#" className="hover:underline underline-offset-4">
          JOYERIA
        </a>
        <a href="#" className="hover:underline underline-offset-4 md:hidden">
          CARRITO
        </a>
      </div>

      <div>
        <a href="#" className="md:block hidden hover:text-blue-300">
          <i className="fas fa-shopping-cart text-xl"></i>
        </a>
      </div>
      <div className="md:hidden">
        <a href="#" className="hover:text-blue-300" onClick={toggleMenu}>
            <i className="fa-solid fa-bars text-xl" ></i>
        </a>
      </div>

    </div>
  </nav>
)
}


export default Header