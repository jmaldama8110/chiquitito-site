import React, { useEffect, useReducer } from "react";
import Footer from "../home/Footer";
import Header from '../home/Header';
import BannerCarousel from '../home/BannerCarousel';


import catalogoReducer from '../../reducers/catalogoReducer';
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
