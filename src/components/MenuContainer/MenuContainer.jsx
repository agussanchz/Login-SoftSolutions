import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuContainer() {
  return (
    <div>
        <h1>Bienvenido a softSolutions</h1>
        <Link to={'/menu/logout'}>Cerrar sesion</Link>
    </div>
  )
}
