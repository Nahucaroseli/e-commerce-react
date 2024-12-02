import React from 'react'
import { Link } from 'react-router'

function ProductCard(props) {
  return (
    <Link to={"/products/"+props.id}>
      <div className='hover:shadow hover:shadow-xl container max-md:mx-auto rounded-lg flex flex-col text-center border-2 border-slate-200 gap-y-1 p-2 align-center w-60 bg-white cursor-pointer ease-out duration-300'>
          <img className='w-40 h-40 ml-9 bg-slate-200 ' src={props.product.image}/>
          <p className='text-slate-500 font-serif'>{props.product.category}</p>
          <h1 className='font-mono text-left'>{props.product.title}</h1>
          <h1 className='font-bold text-xl text-left'>$ {props.product.price}</h1>
      </div>
    </Link>
  )
}

export default ProductCard