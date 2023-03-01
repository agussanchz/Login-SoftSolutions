import React from 'react'
//Importo contexto
import { AuthContext } from '../../context/authContext'
//Importo router-dom
import { Navigate, Outlet } from 'react-router-dom'

export default function PublicRoute() {
    const { isAuthenticated } = React.useContext(AuthContext)  

    if(isAuthenticated){
        return <Navigate to={'/menu'} />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}
