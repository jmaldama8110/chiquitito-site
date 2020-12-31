import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../home/Header';
import totalCarrito from '../../selectors/carritoTotales';
import db from '../../firebase/firebase';

import Loader from '../home/Loader';

const FormaPago = () => {

    const [totales, setTotales] = useState({})
    const [carrito, setCarrito] = useState([]);
    const [loading, setLoading] = useState(false);
    const [metodopago, setMetodoPago] = useState('');

    useEffect(() => {

        const defaultTab = document.getElementById('oxxo');
        defaultTab.style.display = "block";
        defaultTab.className += " active";
        setMetodoPago('oxxo')

        /////////////// carga los datos del carrito de localstorage //////////////////
        const localData = JSON.parse(localStorage.getItem('carrito'));
        //////////////////////////////////////////////////////////////////////////////
        if (localData) {
            setCarrito(localData);
            setTotales(totalCarrito(localData));
        }
        //////////////////////////////////////////////////////////////////////////////
    }, []);

    const verTabulador = (event, tabId) => {

        // // Get all elements with class="tabcontent" and hide them
        const tabcontent = document.getElementsByClassName("tabulador-content");

        let step;
        for (step = 0; step < tabcontent.length; step++) {
            tabcontent[step].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        const tablinks = document.getElementsByClassName("tabuladorlinks");

        for (step = 0; step < tablinks.length; step++) {
            tablinks[step].className = tablinks[step].className.replace(" active", "");
        }

        // // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabId).style.display = "block";
        event.target.className += " active";
        setMetodoPago(tabId);

    }

    const onRegistrarPedido = () => {

        

    }

    return (
        <div>
            <Header />
            { loading ? 
                <Loader /> :
            <div className='contenido-centrado'>

                <h1>Elige una forma de pago</h1>
                <Link onClick={onRegistrarPedido}>Finalizar</Link>

                <div className="tabulador">
                    <button className="tabuladorlinks" onClick={(event) => verTabulador(event, 'oxxo')}>Pago en OXXO</button>
                    <button className="tabuladorlinks" onClick={(event) => verTabulador(event, 'transferencia')}>Transferencia bancaria</button>
                    <button className="tabuladorlinks" onClick={(event) => verTabulador(event, 'efectivo')}>Efectivo</button>
                </div>


                <div id="oxxo" className="tabulador-content">
                    <h1>Importe a depositar: ${totales.totalMasEnvio}</h1>
                    <p>* Tienda oxxo cobrará una comision de 9.0 pesos más IVA en cada deposito</p>
                    <h2>5204-1671-3054-9595</h2>
                    <h4>Titular: Cyntia Reyes Hartman</h4>
                    <img src='/images/medios-pago/tdd-saldazo.png'></img>
                </div>

                <div id="transferencia" className="tabulador-content">
                    <h1>Importe a transferir: ${totales.totalMasEnvio}</h1>
                    <img src='/images/medios-pago/bbva-logo.png'></img>
                    <h2>Cuenta CLABE: 012100027972012657</h2>
                    <h2>Numero de cuenta: 2797201265</h2>

                    <img src='/images/medios-pago/banamex-logo.png'></img>
                    <h2>Numero de plastico: 5204-1671-3054-9595</h2>
                </div>

                <div id="efectivo" className="tabulador-content">
                    <h3>Pagos en efectivo</h3>
                    <p>Contacta al vendedor para realizar tu pago por este medio...</p>
                </div>

            </div>
            }

        </div>

    );
}

export default FormaPago;