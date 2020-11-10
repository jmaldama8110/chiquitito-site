import React, { useEffect, useReducer } from "react";
import Footer from "./Footer";
import Header from './Header';
import BannerCarousel from './BannerCarousel';


import catalogoReducer from '../reducers/catalogoReducer';
import catalogoContext from '../context/catalogoContext';
import CategoriasGridCatalogoLista from "./CategoriasGridCatalogoLista";

const CategoriasGridCatalogo = ({ match }) => {

    const [productosPorCategoria, dispatchCatalogo] = useReducer(catalogoReducer, []);

    /// Use effect se ejecuta solamente 1 vez
    useEffect(() => {

        const tipoCategoria = match.params.tipo
        const localData = JSON.parse(localStorage.getItem('catalogo')); // recuperar y parsea el arreglo de localStorage
        const result = localData.filter((i) => i.categoria === tipoCategoria);

        if (result) {
            dispatchCatalogo({ type: 'POPULATE_CATALOGO', catalogo: result });

        }
    }, [])


    return (
        <div>
            <Header />
            <BannerCarousel />
            <CategoriasGridCatalogoLista
                productosLista={productosPorCategoria}
            />
            <Footer />
        </div>


    );
}

export default CategoriasGridCatalogo;
