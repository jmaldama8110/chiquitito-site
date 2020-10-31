import React, { useEffect, useReducer } from 'react';

import carritoReducer from '../reducers/carritoReducer';
import CarritoLista from './CarritoLista';
import CarritoFormulario from './CarritoFormulario';

import carritoContext from '../context/carritoContext';


const CarritoAdmin = () => {

    const [carrito, dispatchCarrito] = useReducer(carritoReducer, []);

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('carrito'));
        if (localData) {
            dispatchCarrito({ type: 'POPULATE_CARRITO', carrito: localData });
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    return (
        <carritoContext.Provider value={{carrito, dispatchCarrito}}>
            <h3>Mi carrito</h3>
            <CarritoLista />
            <h3>Agrega un articulo al carrito</h3>
            <CarritoFormulario />
        </carritoContext.Provider>
    );

}

export default CarritoAdmin;