import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import getProducts from '../services/products';
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router';

function Home() {


    const {filter} = useParams();

    const [products,setProducts] = useState([]);

   


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts(filter);
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    console.log(products);
    
    const HTMLproducts = products.map( (product)=>{
        return (
            <ProductCard key={product.id} product={product}/>
        )
    })

  return (
    <>
    <Header />
    <div class="relative w-full h-96">
        <img 
            src="/hero.jpg" 
            alt="Hero Image" 
            class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center gap-y-8 flex-col justify-center">
            <h1 class="text-white text-5xl font-bold">Compra Facil</h1>
            <h1 class="text-white text-3xl font-bold">Envios gratis a todo el pais</h1>
        </div>
    </div>
    <div id="container" className='container flex flex-col gap-y-10 md:ml-20 md:flex-row md:flex-wrap justify-between w-auto mt-20 gap-y-10 mb-20'>
        {HTMLproducts}
    </div>

    </>

  )
}

export default Home