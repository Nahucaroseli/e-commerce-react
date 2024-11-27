import React from 'react'

function ProductCard(props) {
  return (
    <div className='container max-md:mx-auto rounded-lg flex flex-col text-center gap-y-1 p-2 align-center w-60 bg-white'>
        <img className='w-40 h-40 ml-9' src={props.product.image}/>
        <p className='text-slate-500 font-serif'>{props.product.category}</p>
        <h1 className='font-bold'>{props.product.title}</h1>
        <h1 className='font-bold'>$ {props.product.price}</h1>
        <button className=' border-2 border-black p-2 rounded-lg  text-white bg-black hover:bg-white hover:text-black ' >VER MAS</button>
    </div>
  )
}

export default ProductCard