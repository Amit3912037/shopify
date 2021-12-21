import { createContext } from "react";

const AuthContext=createContext({
    isLoggedIn: false,
    userEmail: null,
    login:()=>{},
    logout: ()=>{}
})

export default AuthContext;