import React from 'react';

const ProductoPreviewPage = () => {

    return (
        <div className='card'>
            <img src='images/productos/panales/1.png' alt='nombre producto' style={{width:'100%'}}></img>
            <h1>Nombre producto</h1>
            <p className='price'>$249</p>
            <p> Descripcion del producto aqui 
                Tela pul impermeable y transpirable. Composición poliester con recubrimiento de TPU, 
                Certificación OEKO-TEX. Se vende en 3 presentaciones: por metro de 150 cm de ancho,  
                medio metro y 150 cm de ancho y por cuarto de 75 x 50 cm.
            </p>
            <p><button>Al Carrito</button></p>
        </div>
    );
}

export {ProductoPreviewPage as default };