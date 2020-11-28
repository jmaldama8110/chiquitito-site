
import React, { useEffect, useState } from 'react';

export const Login = () => {

    const [conectado, setConectado] = useState(false);
    const [usuarioID, setUsuarioID] = useState('');
    const [picture, setPicture] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    // ejecuta al montart el componente (equivalente a componentDidMount)
    useEffect(() => {

        const appId = '1831372963679416';
        const apiVersion = 'v9.0';

        window.fbAsyncInit = () => {
            window.FB.init({
                appId: appId,
                cookie: true,
                xfbml: true,
                version: apiVersion
            });

            window.FB.Event.subscribe('auth.statusChange', (response) => {
                statusChangeCallback(response);
            });

            checkLoginStatus();

        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/es_LA/all.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    }, []);

    const statusChangeCallback = (response) => {
        if (response.status === 'connected') {
            setConectado(true);
            setUsuarioID(response.authResponse.userID);

            const url = `/${response.authResponse.userID}?fields=first_name,last_name,email,picture,birthday,hometown,location`;
            window.FB.api(url, (res) => {
                setNombre(res.first_name);
                setApellido(res.last_name);
                setPicture(res.picture.data.url);
            });

        }
        else {
            setConectado(false);
        }

    }
    const checkLoginStatus = () => {
        window.FB.getLoginStatus((response) => {
            statusChangeCallback(response);
        });
    }


    const mostrarPerfil = () => {
        if (conectado) {
            return (
                <div>
                    <img src={`${picture}`} alt={usuarioID}></img>
                    <p>{nombre} {apellido} Bienvenido!</p>
                </div>
            );

        } else {
            return <p>No conectado</p>
        }

    }


    return (

        <div>
            { mostrarPerfil()}

            <div class="fb-login-button"
                data-size="large"
                data-button-type="login_with"
                data-layout="rounded"
                data-auto-logout-link="true"
                data-use-continue-as="true"
                data-width="">
            </div>
        </div>
    );
}

export default Login;   