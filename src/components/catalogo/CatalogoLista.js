import React, { useContext } from 'react';
import CatalogoItem from './CatalogoItem';
import catalogoContext from '../../context/catalogoContext';

const CatalogoLista = ( ) => {

    
    const { catalogo } = useContext(catalogoContext);

    return catalogo.map( (item) => 
        <CatalogoItem
            key={item.producto_id}
            item={item}
            
        />
     );
}
export default CatalogoLista;