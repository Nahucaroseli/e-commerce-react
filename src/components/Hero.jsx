import React from 'react'

function Hero() {
  return (
    <div className="relative w-full h-96">
    <img 
        src="/hero.jpg" 
        alt="Hero Image" 
        className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center gap-y-8 flex-col justify-center">
        <h1 className="text-white text-5xl font-bold">Compra Facil</h1>
        <h1 className="text-white text-3xl font-bold">Envios gratis a todo el pais</h1>
    </div>
</div>
  )
}

export default Hero