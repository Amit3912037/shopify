import { useState } from "react";
import AuthContext from "./auth-context";

const AuthContextProvider = (props) => {
  
    const initialUserEmail = localStorage.getItem('userEmail');

    
    const [userEmail, setUserEmail] = useState(initialUserEmail);

    const isLoggedIn = !!userEmail;

    const loginHandler = (email) => {
        setUserEmail(email);
        localStorage.setItem('userEmail', email);
    }

    const logoutHandler = () => {
        setUserEmail(null);
        localStorage.removeItem('userEmail');
    }

    const authContext = {
        isLoggedIn: isLoggedIn,
        userEmail: userEmail,
        login: loginHandler,
        logout: logoutHandler
    }
    return (
        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>)
}

export default AuthContextProvider;