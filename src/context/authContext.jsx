import React from 'react';
//Importacion de hooks
import { useCallback, useMemo } from 'react';

//Creacion del contexto
const AuthContext = React.createContext();
const { Provider } = AuthContext;

//Recupero la informacion del localStorage
const user = localStorage.getItem('user');


//Funcion para saber si un usuario esta logeado 
const AuthContextProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated ] = React.useState(user ?? false) 

    //El usuario se encuentra logeado
    const isLogged = useCallback(() => {
        localStorage.setItem(user, true)
        setIsAuthenticated(true)
    }, []);

    //Cierre de sesion
    const logout = useCallback(() => {
        localStorage.clear()
        setIsAuthenticated(false)
    }, []);

    //Paso de valores 
    const value = useMemo(() => ({
        isLogged,
        logout,
        isAuthenticated
    }),[isLogged, logout, isAuthenticated])


    return (
        <Provider value={value}>{children}</Provider>
    )
}

export {AuthContext, AuthContextProvider};