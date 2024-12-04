import React, { useContext, useEffect, useState } from 'react'
import { CartContext, } from '/src/context/cart.context.jsx';

function Cart() {

  const {products,total} = useContext(CartContext);
  const [HTMLproducts, setHTMLproducts] = useState([]);

  useEffect(() => {
    const generatedHTML = products.map((product) => {
      return (
        <div className="flex flex-row" key={product.id}>
          <img className="w-40" src={product.image} alt="" />
          <div className="flex flex-col ml-5 gap-y-4">
            <h1>{product.title}</h1>
            <h1>${product.price}</h1>
            <h1>Cant: {product.quantity}</h1>
          </div>
        </div>
      );
    });

    setHTMLproducts(generatedHTML); 
  }, [products]);


  return (
    <div id="cart" className="cart container flex flex-col items-start justify-start">
      <h1 className="absolute top-6 text-xl">CARRITO</h1>
      <i className="fa-solid fa-xmark absolute text-xl top-6 right-10"></i>
      <div className="flex flex-col h-3/4 overflow-y-auto scrollbar-hide gap-y-10 mt-10">
        {HTMLproducts}
      </div>
      <div className="absolute bottom-10 md:bottom-2">
        <h1 className="text-xl">Total: $ {total}</h1>
        <button className="mb-5 border-2 border-black p-2 rounded-lg w-60 text-black bg-white hover:bg-gray-200 duration-300 hover:text-xl">PAGAR</button>
      </div>
    </div>
  )
}

export default Cart