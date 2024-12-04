const URL = 'https://fakestoreapi.com/products';



export const getProducts = async () => {
    try{
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    }
    catch{
        console.log("404 Error");
        
    }
}



export const getProductsByCategory = async (filter) => {
    try{
        const response = await fetch(URL+"/category/"+filter);
        const data = await response.json();
        return data;
    }
    catch{
        console.log("404 Error");
        
    }
}


export const getProductById = async(id) =>{
    try{
        const response = await fetch(URL+"/"+id);
        const data = await response.json();
        return data;
    }catch{
        console.log("404 Error");
        
    }
}

export default getProducts;