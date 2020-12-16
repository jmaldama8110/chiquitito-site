import React, { useEffect, useReducer, useState } from 'react';

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

            <carritoContext.Provider value={{ carrito, dispatchCarrito }}>

                <h3>Mi carrito</h3>
                <table>
                    <tr>
                        <th></th>
                        <th>Articulo</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                    <CarritoLista />
                </table>

            </carritoContext.Provider>
            <CarritoAdminTotales totales={totales} />

        </div>
    );

}

export default CarritoAdmin;