
import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';

import PerfilChip from '../usuario/PerfilChip';
import Header from '../home/Header';
import Loader from '../home/Loader';


import authReducer from '../../reducers/authReducer';
import authContext from '../../context/authContext';


import ClienteInfo from '../usuario/ClienteInfo';


const PedidosAdmin = () => {

    const [userData, dispatchUserData] = useReducer(authReducer, {});
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        onAttemptLogin();

    }, []);

    const onAttemptLogin = () => {
        if (!window.FB) return;
        // intenta hacer el login
        window.FB.getLoginStatus(res => {
            if (res.status === 'connected') {
                fxFacebookLoginHandler(res);
            }
            else {
                // si no esta conectado, intenta conectar
                window.FB.login(fxFacebookLoginHandler, {
                    scope: 'public_profile,email'
                });
            }
        });

    }


    const fxFacebookLoginHandler = (res) => {

        if (res.status === 'connected') {
            window.FB.api(`/${res.authResponse.userID}?fields=first_name,last_name,email,picture`, userData => {

                const usuarioData = {
                    ...userData,
                    accessToken: res.authResponse.accessToken,
                    conectado: true
                }

                dispatchUserData({
                    type: 'LOGIN',
                    usuarioData
                });
                setLoading(false);
            });
        }
    }

    const cerrarSesion = () => {
        setLoading(true);
        window.FB.logout(function (res) {
            dispatchUserData({ type: 'LOGOUT' });
            setLoading(false);
        });


    }

    return (
        <div>
            <Header />
            {
                loading ? <Loader /> :
                    <div className='contenido-centrado'>

                        <authContext.Provider value={{ userData }}>

                            {userData.conectado
                                ?
                                <div className='perfilchip-contenedor'>

                                    <h1>¿Eres tu?</h1>
                                    <PerfilChip /><br />
                                    <p>Si no eres tu, puedes cerrar sesion <Link onClick={cerrarSesion} className='cerrarsesion'> Aqui!</Link> </p>
                                    <Link to='/carrito' className='btn btn-secondary'>Regresar al carrito</Link>
                                    <div>
                                        <ClienteInfo />
                                    </div>
                                </div>
                                :
                                <div>
                                    <p>No conectado, regresa de nuevo al carrito e intantelo nuevamente!</p>
                                    <Link to='/carrito' className='btn btn-secondary'>Regresar al carrito</Link>
                                </div>

                            }

                        </authContext.Provider>

                    </div>
            }
        </div>
    );
}

export default PedidosAdmin;