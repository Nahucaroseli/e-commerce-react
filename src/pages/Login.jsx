import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import Cart from '../components/Cart'
import {useNavigate } from 'react-router';
import { registerUser } from '../services/user';
import { UserContext } from '../context/user.context';
import Account from './Account';

function Login() {
  const [username, setUserName] = useState("");
  const [email, setMail] = useState("");
  const [password, setPass] = useState("");

  const navigate = useNavigate();


  const {registrarUsuario} = useContext(UserContext);

  const usuarioGuardado = localStorage.getItem('user');
  const usuario = JSON.parse(usuarioGuardado);

  const handleRegister = async (username,email,password)=>{
    try {
        const response = await registerUser({username,email,password});
        console.log("Registro hecho");
        console.log(response);
        return response;
    } catch (error) {
      console.log(error);
    }
  }

  const submitRegister = async () => {
    if (!username || !email || !password) {
      console.error("Todos los campos son obligatorios");
      return;
    }
  
    try {
      const response = await handleRegister(username, email, password);
      console.log(response);
      if (response) {
        const usuario = {
          usuario: username,
          correo: email,
          contraseña:password
        }
        console.log(usuario);
        registrarUsuario(usuario);
        navigate("/");
      } else {
        console.error("Error durante el registro");
      }
    } catch (error) {
      console.error("Error en submitRegister:", error);
    }
  };


  return (
    <>
        <Header/>
        <Cart/>
          {!usuario &&
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
              <form onSubmit={(e)=> { e.preventDefault(); submitRegister();}} className='flex flex-col p-10 w-11/12 h-100 gap-y-3 rounded-xl border-2 border-black md:w-full'>
                  <h1>Nombre de Usuario</h1>
                  <input  value={username} onChange={(e)=>{setUserName(e.target.value)}} className='border border-black p-2' type="text"/>
                  <h1>Correo electronico</h1>
                  <input value={email} onChange={(e)=>{setMail(e.target.value)}} className='border border-black p-2' type="text"/>
                  <h1>Contraseña</h1>
                  <input value={password} onChange={(e)=>{setPass(e.target.value)}} className='border border-black p-2' type="password"/><button type='submit' className=' mt-10 border-2 border-black p-2 rounded-lg w-60 text-white bg-black hover:bg-white hover:text-black ease-out duration-300 '>Registrarse</button>
              </form>
            </div>
          </div>
          }
          
    </>
  )
}

export default Login