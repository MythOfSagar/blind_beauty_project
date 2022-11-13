import { useState } from "react";
import { createContext } from "react";

export const AuthContext=createContext();

function AuthContextProvider({children}){

const [authState,setState]=useState({
    isAuth:false,
    email:""
})
    const loginUser=(num)=>{setState({isAuth:true,email:num})}

    const logoutUser=()=>{setState({isAuth:false,email:""})}
    
    return(<AuthContext.Provider value={{authState ,loginUser,logoutUser}}

    >{children}</AuthContext.Provider>)

}

export default AuthContextProvider;