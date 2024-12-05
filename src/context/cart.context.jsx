import { createContext, useState } from "react";

const CartContext = createContext();


function CartContextWrapper(props) {


    const [products,setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    


    const addToCart = (newProduct) =>{
        const existingProduct = products.find(product => product.id === newProduct.id);
        if(existingProduct){
            setProducts(products.map(product=> product.id === newProduct.id ? {...product,quantity:product.quantity+1}:product));
        }else{
            setProducts([...products,{...newProduct,quantity:1}]);
        }

        setTotal((prevTotal)=>{
            return prevTotal + newProduct.price;
        })

    }

    const removeProduct = (productRemove) =>{
        const product = products.find(product => product.id === productRemove.id);
        if(product.quantity > 1){
            setProducts(products.map(product=> product.id === productRemove.id ? {...product,quantity:product.quantity-1}:product));
        }else if(product.quantity === 1){
           setProducts(products.filter((item)=>{
            return item !== product;
           }));
        }

        setTotal((prevTotal) => Math.max(0, prevTotal - product.price));
    }
  return (
        <CartContext.Provider value={{products,addToCart,total,removeProduct}}>
            {props.children}
        </CartContext.Provider>
  )
}

export {CartContext,CartContextWrapper};