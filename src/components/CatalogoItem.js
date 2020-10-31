import React, { useContext } from 'react';
import catalogoContext from '../context/catalogoContext';

const CatalogoItem = ({ item }) => {

  const { dispatchCatalogo } = useContext(catalogoContext);

  return (
    <div>
      <div className="content-contenedor">
        <div className="catalogo_lista_item">
          <div>{item.producto_id}</div>
          <div>{item.nombre_producto}</div>
          <div>{item.descripcion}</div>
          <div>{item.precio}</div>
          <button
            onClick={() => dispatchCatalogo({
              type: "REMOVE_CATALOGO",
              producto_id: item.producto_id
            })} >x</button>

        </div>
      </div>
    </div>

  )
}

export default CatalogoItem;