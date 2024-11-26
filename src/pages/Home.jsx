import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import getProducts from '../services/products';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

function Home() {

    const [products,setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
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
        <div className='container flex flex-col gap-y-10 md:ml-20 md:flex-row md:flex-wrap justify-between w-auto mt-20 gap-y-10'>
            {HTMLproducts}
        </div>
    <Footer/>

    </>


  )
}

export default Home