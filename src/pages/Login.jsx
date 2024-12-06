import React from 'react'
import Header from '../components/Header'
import Cart from '../components/Cart'

function Login() {
  return (
    <>
        <Header/>
        <Cart/>
          <div className='container flex flex-col pt-32 gap-y-10 lg:flex-row gap-x-16 justify-center overflow-hidden'>
             <div className='flex flex-col ml-5 gap-y-10 w-full'>
                <h1 className='text-xl font-bold'>Iniciar Sesion</h1>
                <form className='flex flex-col p-10 w-11/12 h-100 gap-y-3 rounded-xl border-2 border-black md:w-full'>
                    <h1>Nombre de Usuario</h1>
                    <input className='border border-black p-2' type="text"/>
                    <h1>Contraseña</h1>
                    <input className='border border-black p-2' type="password"/><button className=' mt-10 border-2 border-black p-2 rounded-lg w-60 text-white bg-black hover:bg-white hover:text-black ease-out duration-300 '>Acceder</button>
                </form>
             </div>
             <div className='bg-black w-5'>

             </div>
             <div className='flex flex-col ml-5 gap-y-10 w-full'>
                <h1 className='text-xl font-bold'>Registrarse</h1>
                <form className='flex flex-col p-10 w-11/12 h-100 gap-y-3 rounded-xl border-2 border-black md:w-full'>
                    <h1>Nombre de Usuario</h1>
                    <input className='border border-black p-2' type="text"/>
                    <h1>Contraseña</h1>
                    <input className='border border-black p-2' type="password"/><button className=' mt-10 border-2 border-black p-2 rounded-lg w-60 text-white bg-black hover:bg-white hover:text-black ease-out duration-300 '>Registrarse</button>
                </form>
             </div>

        </div>
    </>
  )
}

export default Login