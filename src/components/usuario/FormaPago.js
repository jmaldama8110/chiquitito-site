import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import getHoyMasDosDias from "../../utils/addDiasFecha";

import Header from '../home/Header';
import PDFCreador from '../../components/home/PDFCreador';
import Loader from '../home/Loader';

import db from '../../firebase/firebase';


const FormaPago = ({ match }) => {

    const [total, setTotal] = useState('');
    const [nombres, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [envioPor, setEnvioPor] = useState('');
    const [precioEnvio, setPrecioEnvio] = useState('');
    const [totalMasEnvio, setTotalMasEnvio] = useState('');
    const [numero_celular, setNumeroCelular] = useState('');

    const [pedidoItems, setPedidoItems] = useState([]);
    const [diaPago, setDiaPago] = useState('')
    const [pedidoIdShort, setPedidoIdShort] = useState('');

    const [loading, setLoading] = useState(false);

    const [metodopago, setMetodoPago] = useState('');
    const [titular, setTitular] = useState('');
    const [cuentaTDD, setCuentaTDD] = useState('');

    const [mostraConfirmacion, setMostrarConfirmacion] = useState(false);

    useEffect(() => {

        setLoading(true);

        const pedidoRef = db.ref(`pedidos/${match.params.pedidoid}`);
        pedidoRef.once('value').then(snapshot => {

            const pedidoSnapshot = snapshot.val();
            setTotal(pedidoSnapshot.total);
            setTotalMasEnvio(pedidoSnapshot.total_mas_envio);
            setNombre(pedidoSnapshot.nombres +' '+pedidoSnapshot.apellidos);
            setDireccion( `${pedidoSnapshot.direccion}, ${pedidoSnapshot.municipio}, CP:${pedidoSnapshot.codigo_postal} - ${pedidoSnapshot.estado}` );
            setEnvioPor(pedidoSnapshot.envio_por);
            setPrecioEnvio(pedidoSnapshot.precio_envio)
            setNumeroCelular(`${pedidoSnapshot.numero_celular}`)

            /* Recupera los items del pedido indicado */
            db.ref('pedido_items')
                .once('value')
                .then(snapshot => {

                    const pedidoItems = [];
                    snapshot.forEach(childSnap => {
                        const item = childSnap.val();

                        if (item.pedido_ref === match.params.pedidoid) {
                            pedidoItems.push({
                                keyref: childSnap.key,
                                ...item
                            })
                        }
                    });
                    setPedidoItems(pedidoItems);
                
                });
            /*  - - - - - -  - - - -*/

            const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            setDiaPago(getHoyMasDosDias(2, opts));

            /// saca las ultimas 5 letras del codigo del pedido //// 
            const inicio = match.params.pedidoid.length - 5;
            const ultimo = match.params.pedidoid.length;
            setPedidoIdShort(match.params.pedidoid.substring(inicio, ultimo));
            /*------------------------------------------------------------*/

            setLoading(false);

            const defaultTab = document.getElementById('oxxo');
            defaultTab.style.display = "block";
            defaultTab.className += " active";
            setMetodoPago('oxxo')
            setTitular('Cyntia Reyes Hartmann');
            setCuentaTDD('5204-1671-3054-9595')

        });

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

        switch( tabId ){
            case 'oxxo':
                setTitular('Cyntia Reyes Hartmann');
                setCuentaTDD('5204-1671-3054-9595');
                break;
            case 'transferencia':
                setTitular('Cyntia Reyes Hartmann');
                setCuentaTDD('BBVA-> CLABE:012100027972012657 / No Cuenta: 2797201265');
                break;        
            default:
                setTitular('');
                setCuentaTDD('');
                break;
        }


    }

    const onRegistrarPedido = () => {

        setLoading(true);

        db.ref(`pedidos/${match.params.pedidoid}`).update({ // actualiza los datos
            metodopago,
            pedidoIdShort,
            diaPago,
            estatus: 'B'
        }).then(() => {

            setLoading(false);
            setMostrarConfirmacion(true);
        })

    }

    if (!mostraConfirmacion) {

        return (

            <div>
                <Header />

                { loading ?
                    <Loader /> :
                    <div className='contenido-centrado'>

                        <h1>Elige una forma de pago</h1>
                        <Link onClick={onRegistrarPedido} className='btn btn-primary'>Finalizar</Link><p></p>

                        <div className="tabulador">
                            <button className="tabuladorlinks" onClick={(event) => verTabulador(event, 'oxxo')}>Pago en OXXO</button>
                            <button className="tabuladorlinks" onClick={(event) => verTabulador(event, 'transferencia')}>Transferencia bancaria</button>
                            <button className="tabuladorlinks" onClick={(event) => verTabulador(event, 'efectivo')}>Efectivo</button>
                        </div>


                        <div id="oxxo" className="tabulador-content">
                            <h1>Importe a depositar: ${totalMasEnvio}</h1>
                            <p>* Tienda oxxo cobrará una comision de 9.0 pesos más IVA en cada deposito</p>
                            <h2>{cuentaTDD}</h2>
                            <h4>Titular: {titular}</h4>
                            <img src='/images/medios-pago/tdd-saldazo.png'></img>
                        </div>

                        <div id="transferencia" className="tabulador-content">
                            <h1>Importe a transferir: {totalMasEnvio}</h1>
                            <img src='/images/medios-pago/bbva-logo.png'></img>
                            <h2>{cuentaTDD}</h2>
                            <h2>Titular: {titular}</h2>

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
    else {

        const resumen = {
            nombres,
            pedidoIdShort,
            diaPago,
            total,
            metodopago,
            direccion,
            envioPor,
            precioEnvio,
            totalMasEnvio,
            numero_celular,
            titular,
            cuentaTDD,
            pedidoItems
        }

        return (
            <div>
                <Header />
                <div className='container flexible'>
                    <PDFCreador data={resumen} />
                </div>
                <p></p>
                <Link to="/" className='btn btn-secondary'>Regresar a la tienda</Link>
            
            </div>
        );
    }
}

export default FormaPago;