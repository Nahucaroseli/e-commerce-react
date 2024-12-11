import { createContext, useState } from "react";

const UserContext = createContext();


import React from 'react'

function UserContextWrapper(props) {

    const [user,setUser] = useState(null);


    const registrarUsuario = (user)=>{
        console.log(user);
        localStorage.setItem('user',JSON.stringify(user));
        setUser(user);
    }


  return (
    <UserContext.Provider value={{registrarUsuario}}>
        {props.children}
    </UserContext.Provider>
  )
}

export {UserContext,UserContextWrapper}
