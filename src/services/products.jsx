const URL = 'https://fakestoreapi.com/products/category/';

let base = `men's clothing`

export default async function getProducts(filter) {
    base = filter
    try{
        const response = await fetch(URL+base);
        const data = await response.json();
        console.log(data)
        return data;
    }
    catch{
        console.log("404 Error");
        
    }
}
