import React, { useState } from 'react';

const CantidadInput = ( { cantidad, setCantidad, onChangeCantidad } ) => {
    

    const onCantidadMenos = (e) => {
        if( cantidad > 1 ){
            const v = cantidad - 1;
            setCantidad( v );
            onChangeCantidad();
        }

}
    const onCantidadMas = (e) => {
            const v = cantidad + 1;
            setCantidad( v );
            onChangeCantidad();
    }

    return (
        <div className='cantidad-container'>
            <div className='icono' onClick={onCantidadMenos}>
                <i className="fas fa-minus"></i>
            </div>
            <span>{cantidad}</span>
            <div className='icono' onClick={onCantidadMas}>
                <i className="fas fa-plus"></i>
            </div>
        </div>
    );
}

export { CantidadInput as default };