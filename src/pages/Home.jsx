import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router';

import Hero from '../components/Hero';
import useProducts from '../hooks/useProducts';

function Home() {


    const {filter = ` `} = useParams();

    const products = useProducts(filter);


    console.log(products);
    
    const HTMLproducts = products.map( (product)=>{
        return (
            <ProductCard key={product.id} product={product} id={product.id}/>
        )
    })

  return (
    <>
    <Header />
    <Hero/>
    <div id="container" className='container flex flex-col gap-y-10 md:ml-20 md:flex-row md:flex-wrap justify-between w-auto mt-20 gap-y-10 mb-20'>
        {HTMLproducts}
    </div>

    </>

  )
}

export default Home