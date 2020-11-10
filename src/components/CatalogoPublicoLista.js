import React, { useContext, useReducer } from 'react';
import CatalogoPublicoItem from './CatalogoPublicoItem';

import catalogoContext from '../context/catalogoContext';


const CatalogoPublicoLista = () => {

    const { catalogoPublic } = useContext(catalogoContext);

    return catalogoPublic.map((item) =>
        <CatalogoPublicoItem
            key={item.producto_id}
            item={item}
        />
    );
}

export default CatalogoPublicoLista;