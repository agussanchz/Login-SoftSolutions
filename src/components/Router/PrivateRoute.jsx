import React from 'react'
//Importo contexto
import { AuthContext } from '../../context/authContext'
//Importo router-dom
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute() {
    const { isAuthenticated } = React.useContext(AuthContext)  

    if(!isAuthenticated){
        return <Navigate to={'/'} />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}
