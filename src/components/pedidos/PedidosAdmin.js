
import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';

import PerfilChip from '../usuario/PerfilChip';
import Header from '../home/Header';
import authReducer from '../../reducers/authReducer';
import authContext from '../../context/authContext';

const PedidosAdmin = () => {

    const [userData, dispatchUserData] = useReducer(authReducer, {});

    useEffect(() => {

        if (!window.FB) return;
        // intenta hacer el loguin
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

    }, []);

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

            });
        }
    }

    const cerrarSesion = () => {
        window.FB.logout( function (res)  {
            console.log(res);
        });
        dispatchUserData({ type: 'LOGOUT' })
    }


    return (
        <div>
            <Header />
            <div className='contenido-centrado'>

                <authContext.Provider value={{ userData, dispatchUserData }}>
                
                    {userData.conectado
                        ? <PerfilChip onLogout={cerrarSesion} />
                        : <p>No conectado</p>}

                </authContext.Provider>
                <Link to='carrito'>
                    <p>Regresar al carrito</p>
                </Link>
            </div>

        </div>
    );
}

export default PedidosAdmin;