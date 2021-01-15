import React, { useEffect } from 'react';
import ProductoDetallePage from '../../components/categorias/ProductoDetallePage';


const ProductosItem = ({ item }) => {


    useEffect(() => {
        window.addEventListener('click', onSalirConClicWindow);

    }, []);

    const onModalOpen = () => {
        // Get the modal
        const modal = document.getElementById(`${item.producto_id}myModal`);
        modal.style.display = 'block';

    }

    const onCloseModal = () => {
        const modal = document.getElementById(`${item.producto_id}myModal`);
        modal.style.display = 'none';

    }

    const onSalirConClicWindow = (e) => {

        const modal = document.getElementById(`${item.producto_id}myModal`);
        if (e.target === modal) {
            modal.style.display = 'none';

        }
    }

    const onDescriptionShort = (description) => {
        const inicio = 0;
        const ultimo = 80;
        return `${description.substring(inicio, ultimo)}...`;
    }

    return (
        <div className='card'>
            <img src={`/images/productos/${item.foldersource}/${item.imgs[0].fs}`} alt={`${item.nombre_producto}`} ></img>
            <h2>{item.nombre_producto}</h2>
            <p className='price'>${item.precio}</p>
            <button onClick={onModalOpen} className='btn btn-primary'>Ver mas...</button>
            <p> {onDescriptionShort(item.descripcion)}</p>

            <div id={`${item.producto_id}myModal`} className="modal">

                <div className="modal-content">
                    <span className="close" onClick={onCloseModal}>&times;</span>

                    <ProductoDetallePage
                        key={item.producto_id}
                        subitem={item}
                        cerrarModal={onCloseModal}
                    />


                </div>

            </div>


        </div>
    );
}

export { ProductosItem as default };