
import React, { useEffect, useReducer } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import CatalogoPublicoLista from '../components/CatalogoPublicoLista';

import catalogoReducer from '../reducers/catalogoReducer';
import catalogoContext from '../context/catalogoContext';

export const LandingPage = () => {

    const [catalogoPublic, dispatchCatalogo] = useReducer(catalogoReducer, []);

    /// Use effect se ejecuta solamente 1 vez
    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('catalogo')); // recuperar y parsea el arreglo de localStorage
        if (localData) {
            dispatchCatalogo({ type: 'POPULATE_CATALOGO', catalogo: localData });

        }
    }, [])

    return (
        <div>
            <Header />
            <Carousel />
            <catalogoContext.Provider value={{ catalogoPublic }} >
                <CatalogoPublicoLista />
            </catalogoContext.Provider>
            <Footer />
        </div>
    );

}


export default LandingPage;