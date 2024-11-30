import React from 'react'

function ProductCard(props) {
  return (
    <div className='hover:shadow hover:shadow-xl container max-md:mx-auto rounded-lg flex flex-col text-center gap-y-1 p-2 align-center w-60 bg-white cursor-pointer ease-out duration-300'>
        <img className='w-40 h-40 ml-9 ' src={props.product.image}/>
        <p className='text-slate-500 font-serif'>{props.product.category}</p>
        <h1 className='font-mono text-left'>{props.product.title}</h1>
        <h1 className='font-bold text-xl text-left'>$ {props.product.price}</h1>
    </div>
  )
}

export default ProductCard