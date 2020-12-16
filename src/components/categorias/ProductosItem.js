import React, { useEffect } from 'react';
import ProductoDetallePage from '../../components/play/ProductoDetallePage';



const ProductosItem = ({ item }) => {

    // const [precioLista, setPrecioLista] = useState('');
    // const [cantidad, setCantidad] = useState('');

    useEffect( ()=>{
        window.addEventListener('click',onSalirConClicWindow);
        
    },[] );

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
        if (e.target == modal) {
            modal.style.display = 'none';
    
        }
    }
    
    

    return (
        <div className='card'>
            <img src={`/images/productos/${item.foldersource}/${item.imgs[0].fs}`} alt={`${item.nombre_producto}`} style={{ width: '100%' }}></img>
            <h1>{item.nombre_producto}</h1>
            <p className='price'>${item.precio}</p>
            <p> {item.descripcion}</p>
            <button onClick={onModalOpen}>Ver mas...</button>

            <div id={`${item.producto_id}myModal`} className="modal">

                <div className="modal-content">
                    <span className="close" onClick={onCloseModal}>&times;</span>

                    <ProductoDetallePage
                        key={item.producto_id}
                        subitem={item}
                     />


                </div>

            </div>


        </div>
    );
}

export { ProductosItem as default };