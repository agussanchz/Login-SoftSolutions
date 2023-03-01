//Importaciones
import React from 'react'
import './Login.css'
import { useForm } from 'react-hook-form';
import authService from '../../services/authService';
import Logo from '../../images/softSolutions.png'
import { Container, Row, Col } from 'react-bootstrap'
import { AuthContext } from '../../context/authContext';

export default function Login() {
    //Creacion de estado para guardar el mensaje de error
    const [ msgError, setMsgError ] = React.useState("")

    //UseForm para validar el formulario
    const {formState:{ errors }, register, handleSubmit } = useForm();

    //Importo el isLogged de useContext
    const { isLogged } = React.useContext(AuthContext);

    //Funcion para el post del jwt
    const onSubmit = async (data) => {
        await authService.login(data.user, data.password)
        .then((response) => { 
            console.log(response)  
            if(response.data.datos.jwt) {
                localStorage.setItem("user", JSON.stringify(response.data.datos.jwt))
                isLogged();
            } else {
                setMsgError("Usuario o Contraseña incorrecta. Intente nuevamente")
            }
        })      
        .catch((error) => {
            console.log(error)
        })
    }


    return (
        <div className='login'>  
            <Container>
                <Row>
                    <Col>                                   
                        <form className='login-form animate__animated animate__fadeInDown' onSubmit={handleSubmit(onSubmit)}> 
                            <div className='login-logo'>   
                                <img src={Logo} alt="img-login" />
                            </div>                                     
            
                            <input className='login-input' type="text" placeholder='Usuario' {...register("user",  {
                                required: true
                            })}/>

                            <label className='login-label'>
                                {errors.user?.type === 'required' && <p>Campo requerido</p>}
                            </label>                    
                                    
                            <input className='login-input' type="password" placeholder='Contraseña'{...register("password", {
                                required: true
                            })}/>

                            <label className='login-label'>
                                {errors.password?.type === 'required' && <p>Campo requerido</p>}
                            </label>             
                                        
                            <input className='login-button' type="submit" value='Ingresar'/>

                            <p className='login-msg'>{msgError}</p>
                        </form>           
                    </Col>
                </Row>
            </Container>
        </div>

    
    )
}
