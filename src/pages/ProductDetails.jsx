import React from 'react'
import Header from '../components/Header'

function ProductDetails() {



  return (
    <>
    <Header/>
    <div className='container'>
        <div className='flex gap-y-2 flex-col md:flex-row md:pt-40 md:ml-10'>
            <img id="product_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcAWcI9SnKzeQ2g4J698TPfGk3LTghm9iPw&s" alt="" />
            <div className='flex justify-center flex-col ml-5 mb-10 gap-y-4 w-auto md:ml-20 mt-10'>
                <h1 className='font-sans text-xl'>Nombre del Producto</h1>
                <h1 className='font-bold text-xl'>Precio</h1>
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam optio perspiciatis repellat deserunt harum modi accusamus nam consectetur rem, voluptate eligendi quidem quos iure sunt nihil, distinctio magni voluptatibus non. lo</h2>
                <button className=' mt-10 border-2 border-black p-2 rounded-lg w-60 text-white bg-black hover:bg-white hover:text-black ease-out duration-300 '>Agregar al Carrito</button>
            </div>

        </div>
    </div>
    </>
  )

}

export default ProductDetails