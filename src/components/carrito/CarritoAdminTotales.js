import React from 'react';
import {Link} from 'react-router-dom';

const CarritoAdminTotales = ({totales}) =>{

    return (
        <div>
            <h2>Total {totales.conteo} articulos = ${totales.total}
            + Envio ({totales.envio}) ${totales.totalMasEnvio}</h2>
            <Link to='/'>
                <p>Continuar comprando</p>
            </Link>
            <Link to="/pedidos">
                <p>Finalizar compra</p>
            </Link>
            <h3>Gastos de envío e impuestos calculados al finalizar la compra</h3>
        </div>


    );
}

export default CarritoAdminTotales;