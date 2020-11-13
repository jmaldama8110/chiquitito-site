import React, { useEffect, useReducer, useState } from 'react';

import carritoReducer from '../reducers/carritoReducer';
import CarritoLista from './CarritoLista';
import totalCarrito from '../selectors/carritoTotales';

import carritoContext from '../context/carritoContext';
import CarritoAdminTotales from './CarritoAdminTotales';
import Header from './Header';
import Footer from './Footer';
import BannerCarousel from './BannerCarousel';

const CarritoAdmin = () => {

    const [carrito, dispatchCarrito] = useReducer(carritoReducer, []);
    const [total, setTotal] = useState('0');

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('carrito'));

        if (localData) {

            dispatchCarrito({ type: 'POPULATE_CARRITO', carrito: localData });
            setTotal(totalCarrito(localData).total.toString());
        }
    }, []);


    useEffect(() => {

        localStorage.setItem('carrito', JSON.stringify(carrito));
        setTotal(totalCarrito(carrito).total.toString());

    }, [carrito]);

    return (
        <div>
            <Header />
            <BannerCarousel />

            <carritoContext.Provider value={{ carrito, dispatchCarrito }}>
                <h3>Mi carrito</h3>
                <CarritoLista />
                <CarritoAdminTotales totalCarrito={total} />
            </carritoContext.Provider>
            <Footer />

        </div>
    );

}

export default CarritoAdmin;