import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';

import carritoReducer from '../../reducers/carritoReducer';
import CarritoLista from '../carrito/CarritoLista';
import totalCarrito from '../../selectors/carritoTotales';

import carritoContext from '../../context/carritoContext';
import CarritoAdminTotales from './CarritoAdminTotales';
import Header from '../home/Header';

const CarritoAdmin = () => {

    const [carrito, dispatchCarrito] = useReducer(carritoReducer, []);
    const [totales, setTotales] = useState({})


    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('carrito'));

        if (localData) {
            setTotales(totalCarrito(localData));
            dispatchCarrito({ type: 'POPULATE_CARRITO', carrito: localData });
        }
    }, []);


    useEffect(() => {

        localStorage.setItem('carrito', JSON.stringify(carrito));

        setTotales(totalCarrito(carrito));

    }, [carrito]);

    return (
        <div>
            <Header />
        <div className='contenido-centrado'>
            <carritoContext.Provider value={{ carrito, dispatchCarrito }}>

                <h3>Mi carrito</h3>
                <table>
                    <tr>
                        <th></th>
                        <th>Articulo</th>
                        <th>Color/estampado</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                        <th>Total</th>
                    </tr>
                    <CarritoLista />
                </table>

            </carritoContext.Provider>

            { totales.total > 0 ?
                <CarritoAdminTotales totales={totales} /> :
                <h3>Aun no has agregado articulos a tu carrito, <Link className='btn-primary' to='/'>Regresar!  </Link></h3>}

        </div>
        </div>
    );

}

export default CarritoAdmin;