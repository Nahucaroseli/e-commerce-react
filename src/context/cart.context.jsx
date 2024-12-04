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
    console.log(products);
  return (
        <CartContext.Provider value={{products,addToCart,total}}>
            {props.children}
        </CartContext.Provider>
  )
}

export {CartContext,CartContextWrapper};