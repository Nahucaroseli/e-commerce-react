const apiUrl = import.meta.env.VITE_API_URL;

export const registerUser = async ({username,email,password}) =>{
     try {
        const response = await fetch(apiUrl+"/registro",{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            }),
        });
        if(response.ok){
            console.log("Registrado correctamente");
            return response;
        }

     } catch (error) {
        console.log(error);
     }
}


export default registerUser;
