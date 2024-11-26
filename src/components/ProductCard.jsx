import React from 'react'

function ProductCard(props) {
  return (
    <div className='  container max-md:mx-auto rounded-lg flex flex-col text-center p-2 align-center w-60 h-auto-1/3 bg-white'>
        <img className='w-40 h-40 ml-9' src={props.product.image}/>
        <h1>{props.product.title}</h1>
        <h1 className='font-bold'>$ {props.product.price}</h1>
        <button className=' border-2 border-black p-2 rounded-lg  text-white bg-black hover:bg-white hover:text-black ' >VER MAS</button>
    </div>
  )
}

export default ProductCard