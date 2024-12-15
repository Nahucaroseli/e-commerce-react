import React, { useContext, useState } from 'react'
import Header from '../components/Header';
import Cart from '../components/Cart';
import { UserContext } from '../context/user.context';

function Account() {
    const [id,setId] = useState("pedidos");
    const {user,logoutUsuario} = useContext(UserContext);


    const handleLogout = ()=>{
        logoutUsuario();
    }


  return (
        <>
            <Header/>
            <Cart/>
            {user &&
            <div className='pt-32 flex flex-col w-100 text-center md:text-left'>
                <h1 className='font-bold text-2xl md:ml-10'>Bienvenido, {user.usuario}!</h1>
                <div className='container flex flex-row md:ml-24 justify-around w-full mt-20'>
                    <button id='pedidos' onClick={(e)=> setId("pedidos")} className='hover:cursor-pointer focus:font-bold'>Pedidos</button>
                    <button id='detalles' onClick={(e)=> setId("detalles")} className='hover:cursor-pointer focus:font-bold'>Detalles de la cuenta</button>
                    <button onClick={(e) => handleLogout()} className='hover:cursor-pointer focus:font-bold'>Cerrar Sesion</button>
                </div>
                <div className='border-2 h-1 border-black'></div>
                <div className='flex flex-col text-center mt-20'>
                    {id == "pedidos" &&
                    <div>
                        <h1 className='font-bold text-xl'>No hay pedidos</h1>
                    </div>
                    }
                    {id == "detalles" &&
                    <div className='md:text-left md:ml-10'>
                        <h1 className='text-xl font-bold mb-10'>Detalles</h1>
                        
                        <h1><strong>Nombre de usuario: </strong>{user.usuario}</h1>
                        <h1><strong>Correo: </strong>{user.correo}</h1>
                    </div>
                        
                    }
                </div>
            </div>

            }
            
        </>
  )
}

export default Account