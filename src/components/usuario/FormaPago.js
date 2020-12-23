import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../home/Header';

const FormaPago = () => {

    useEffect(() => {

        const defaultTab = document.getElementById('oxxo');
        defaultTab.style.display = "block";
        defaultTab.className += " active";

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

    }
    return (
        <div>
            <Header />
            <div className='contenido-centrado'>

                <h1>Formas de pago</h1>
                <Link to="/pedidoregistro">
                    <p>Finalizar</p>
                </Link>

                <div className="tabulador">
                    <button class="tabuladorlinks" onClick={(event) => verTabulador(event, 'oxxo')}>Pago en OXXO</button>
                    <button class="tabuladorlinks" onClick={(event) => verTabulador(event, 'transferencia')}>Transferencia bancaria</button>
                    <button class="tabuladorlinks" onClick={(event) => verTabulador(event, 'efectivo')}>Efectivo</button>
                </div>


                <div id="oxxo" className="tabulador-content">
                    <h3>Banamex</h3>
                    <h1>5204-1671-3054-9595</h1>
                    <h4>Titular: Cyntia Reyes Hartman</h4>
                    <img src='/images/medios-pago/tdd-saldazo.png'></img>
                </div>

                <div id="transferencia" className="tabulador-content">
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

        </div>

    );
}

export default FormaPago;