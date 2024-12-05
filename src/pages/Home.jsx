import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard';
import { useLocation, useParams } from 'react-router';

import Hero from '../components/Hero';
import useProducts from '../hooks/useProducts';
import Cart from '../components/Cart';

function Home() {


    const {filter = ` `} = useParams();

    const products = useProducts(filter);

    const handleClick = ()=>{
      const cart = document.querySelector("#cart");
      cart.classList.remove("activeCart");
    }

    
    const HTMLproducts = products.map( (product)=>{
        return (
            <ProductCard key={product.id} product={product} id={product.id}/>
        )
    })

  return (
    <>
    <Header />
    <Hero/>
    <Cart></Cart>
    <div id="container" onClick={handleClick} className='container flex flex-col gap-y-10 md:ml-20 md:flex-row md:flex-wrap justify-between w-auto mt-20 gap-y-10 mb-20'>
        {HTMLproducts}
    </div>

    </>

  )
}

export default Home