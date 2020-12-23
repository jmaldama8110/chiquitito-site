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

        </div>


    );
}

export default CarritoAdminTotales;