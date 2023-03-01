import React from 'react'
import { AuthContext } from '../../context/authContext'

export default function Logout() {
    const { logout } = React.useContext(AuthContext);
    
    React.useEffect(() => logout());

    return null; 
}
