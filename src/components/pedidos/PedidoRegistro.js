
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const PedidoRegistro = ({ nombres, total, pedidoid }) => {

    const [diaPago, setDiaPago] = useState('')
    const [pedidoIdShort, setPedidoIdShort] = useState('');
    useEffect(() => { 

        var today = new Date();
        var tomorrow = new Date(today);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        tomorrow.setDate(today.getDate()+ 2 );
        setDiaPago( tomorrow.toLocaleDateString('es-MX',options) );

        const n = 5;
        const inicio = pedidoid.length - n;
        const ultimo  = pedidoid.length;
        setPedidoIdShort( pedidoid.substring( inicio, ultimo) );
        
    }, []);

    return (

        <div className='contenido-centrado'>
            
            <h3>Gracias {nombres}!</h3>

            <h3>Numero de pedido es: {pedidoIdShort}</h3>
            <h1>Pago esperado: ${total}, antes del {diaPago}</h1>
            <h2>Manda tu comprobante por whatsapp: 9612521968</h2>
            <Link to="/">
                <p>Regresar a la tienda</p>
            </Link>

        </div>

    );
}

export default PedidoRegistro;