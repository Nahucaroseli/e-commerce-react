
import React, { useEffect, useState } from 'react'
import getProducts, { getProductsByCategory } from '../services/products';

function useProducts(filter) {

    const [products,setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let data;
                if(filter == ` `){
                    data = await getProducts();
                }else{
                    data= await getProductsByCategory(filter);    
                }
           
                const productsWithQuantity = data.map((product)=>({
                    ...product,
                    quantity: 0
                }))

                setProducts(productsWithQuantity);

            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    },[filter]);


    return products;
}

export default useProducts;