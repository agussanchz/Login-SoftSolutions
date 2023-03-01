//Importacion de react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//Importacion del contexto
import { AuthContextProvider } from './context/authContext';
//Importacion de las vistas
import Menu from './views/Menu/Menu';
import Home from './views/Home/Home';
import Logout from './views/Logout/Logout';
//Importacion de las rutas privadas y publicas
import PublicRoute from './components/Router/PublicRoute';
import PrivateRoute from './components/Router/PrivateRoute';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
          <Routes>
            {/* Rutas publicas */}
            <Route exact path='/' element={<PublicRoute/>}>
                <Route exact path='/' element={<Home/>} />
            </Route>
            {/* Rutas privadas */}
            <Route exact path='/menu' element={<PrivateRoute/>} >
                <Route exact path='/menu' element={<Menu/>} />
                <Route exact path='/menu/logout' element={<Logout/>} /> 
            </Route>
          </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
