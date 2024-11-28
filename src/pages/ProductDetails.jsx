import React from 'react'
import Header from '../components/Header'

function ProductDetails() {



  return (
    <>
    <Header/>
    <div className='container'>
        <div className='flex gap-y-2 flex-col md:flex-row md:pt-40 md:ml-10'>
            <img id="product_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcAWcI9SnKzeQ2g4J698TPfGk3LTghm9iPw&s" alt="" />
            <div className='flex justify-center flex-col  gap-y-2 w-auto md:ml-20 mt-10'>
                <h1 className='font-bold'>Nombre del Producto</h1>
                <h1 className='font-bold'>Precio</h1>
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam optio perspiciatis repellat deserunt harum modi accusamus nam consectetur rem, voluptate eligendi quidem quos iure sunt nihil, distinctio magni voluptatibus non.</h2>
                <button className=' mt-10 border-2 border-black p-2 rounded-lg w-60 text-white bg-black hover:bg-white hover:text-black '>Agregar al Carrito</button>
            </div>

        </div>
    </div>
    </>
  )

}

export default ProductDetails