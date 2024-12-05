import React, { useContext } from 'react'
import Header from '../components/Header'
import useProduct from '../hooks/useProduct'
import { useParams } from 'react-router';
import Cart from '../components/Cart';
import { CartContext, CartContextWrapper } from '/src/context/cart.context.jsx';
import toast from 'react-hot-toast'

function ProductDetails() {

  
  const {id} = useParams();

  const product = useProduct(id);

  const {addToCart} = useContext(CartContext);

  const handleClick = ()=>{
    addToCart(product,);
    toast('Agregado al Carrito!',{
      duration: 2000,
      position: 'top-right'
    })
  }

  return (
    <>
 
    <Cart></Cart>
    <Header/>
    {product && 
        <div className='container'>
        <div className='flex gap-y-2 pt-40 flex-col md:flex-row md:pt-40 md:ml-60'>
            <img className='w-80' src={product.image} alt="" />
            <div className='flex justify-center flex-col ml-5 mb-10 gap-y-4 w-auto md:ml-20 mt-10'>
                <h1 className='font-sans text-xl'>{product.title}</h1>
                <h1 className='font-bold text-xl'>${product.price}</h1>
                <h2>{product.description}</h2>
                <button onClick={handleClick} className=' mt-10 border-2 border-black p-2 rounded-lg w-60 text-white bg-black hover:bg-white hover:text-black ease-out duration-300 '>Agregar al Carrito</button>
            </div>
        </div>
    </div>
    }
    </>
  )

}

export default ProductDetails