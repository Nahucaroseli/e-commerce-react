
import { useEffect, useState } from 'react'
import { getProductById } from '../services/products';

function useProduct(id) {
    const [product,setProduct] = useState({});

    useEffect( ()=>{
        const fetchProduct = async () =>{
            try{
                const data = await getProductById(id);
                setProduct(data);
            }
            catch{
                console.log("404 Error");
            }
        }
        fetchProduct();
    },[id]);


    return product;
}

export default useProduct