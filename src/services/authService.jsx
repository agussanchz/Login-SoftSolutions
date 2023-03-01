//Importaciones
import axios from 'axios'
import API_URL  from '../config/paths';

//URL de login
const LOGIN_URL =  API_URL + 'src/ctrl/ajax/login_jwt.ajax.php';

//Recibir el jwt y guardarlo en localStorage (metodo post)
const login = (user, password) => {
    return axios
    .post(LOGIN_URL, {
        user,
        password
    })

}
 
//Exporto el servicio
const authService = {
    login
}

export default authService;

