import React from 'react';

const verDetalleImg = (imgs) => {

    // Get the expanded image
    const expandImg = document.getElementById("expandedImg");
    // Get the image text
    const imgText = document.getElementById("textoImg");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.target.src;

    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.target.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}


const ProductoDetallePage = () => {
    return (
        <div className='contenedor-producto-detalle-general'>
            <div className='contenedor-producto-detalle-columnas'>
                <div className='contenedor-producto-detalle'>
                    <div className='fila-tab'>
                        <div className='col-tab'>
                            <img src='/images/productos/panales/1.png' alt='Nopales' onClick={verDetalleImg} />
                        </div>
                        <div className='col-tab'>
                            <img src='/images/productos/panales/2.png' alt='Nopales 2' onClick={verDetalleImg} />
                        </div>
                        <div className='col-tab'>
                            <img src='/images/productos/panales/3.png' alt='Perritos' onClick={verDetalleImg} />
                        </div>
                        <div className='col-tab'>
                            <img src='/images/productos/panales/4.png' alt='Regional jalisco' onClick={verDetalleImg} />
                        </div>
                    </div>

                    <div className='contenedor-tab'>
                        <img id='expandedImg' style={{ width: '100%' }} />

                        <div id='textoImg'> </div>

                    </div>

                </div>

            </div>
            <div className='contenedor-producto-detalle-columnas'>
                <h1>Nombre producto</h1>
                <p className='price'>$249</p>
                <p> Descripcion del producto aqui
                Tela pul impermeable y transpirable. Composición poliester con recubrimiento de TPU,
                Certificación OEKO-TEX. Se vende en 3 presentaciones: por metro de 150 cm de ancho,
                medio metro y 150 cm de ancho y por cuarto de 75 x 50 cm.
                    </p>
                <p><button>Al Carrito</button></p>


            </div>
        </div>
    );
}

export { ProductoDetallePage as default };