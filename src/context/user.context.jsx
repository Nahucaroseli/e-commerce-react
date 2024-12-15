import { createContext, useState } from "react";

const UserContext = createContext();


import React from 'react'
import { useNavigate } from "react-router";

function UserContextWrapper(props) {

    const [user,setUser] = useState(null);

    const navigate = useNavigate();

    const registrarUsuario = (usuario)=>{
        localStorage.setItem('user',JSON.stringify(usuario));
        setUser(usuario);

    }

    const logoutUsuario = () =>{
      setUser(null);
      localStorage.removeItem("user");
      navigate("/login");
    }

    React.useEffect(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []);

  return (
    <UserContext.Provider value={{user,registrarUsuario,logoutUsuario}}>
        {props.children}
    </UserContext.Provider>
  )
}

export {UserContext,UserContextWrapper}
