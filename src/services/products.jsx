import React from 'react'

const URL = 'https://fakestoreapi.com/products';

export default async function getProducts() {
    try{
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data)
        return data;
    }
    catch{
        console.log("404 Error");
        
    }
}
