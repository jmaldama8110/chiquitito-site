import React, { useEffect, useReducer } from 'react';

import catalogoReducer from '../../reducers/catalogoReducer';
import CatalogoLista from './CatalogoLista';
import CatalogoFormulario from './CatalogoFormulario';

import catalogoContext from '../../context/catalogoContext';

const CatalogoAdmin = () => {

    const [catalogo, dispatchCatalogo] = useReducer(catalogoReducer, []);

    /// Use effect se ejecuta solamente 1 vez
    useEffect(() => {
        const localData = JSON.parse( localStorage.getItem('catalogo') ); // recuperar y parsea el arreglo de localStorage
        if (localData) {
            dispatchCatalogo({ type: 'POPULATE_CATALOGO', catalogo: localData });

        }
    }, [])

    useEffect(() => {
        localStorage.setItem('catalogo', JSON.stringify(catalogo));
    }, [catalogo])

    return (

        <catalogoContext.Provider value={{catalogo, dispatchCatalogo}}>
            <h3>Catalogo de productos</h3>
            <CatalogoLista />
            <h3>Agrega un producto !</h3>
            <CatalogoFormulario />
        </catalogoContext.Provider>
    );
}

export default CatalogoAdmin;
