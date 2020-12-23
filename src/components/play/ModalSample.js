import React, { useEffect } from 'react';
import ProductoDetallePage from '../../components/categorias/ProductoDetallePage';


const onModalOpen = () => {
// Get the modal
const modal = document.getElementById("myModal");
modal.style.display = 'block';


}

const onCloseModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = 'none';

}

const onSalirConClicWindow = (e) => {
    
    const modal = document.getElementById("myModal");
    if( e.target == modal ){
        modal.style.display = 'none';

    }
}

const ModalSample = () => {

    useEffect( ()=>{
        window.addEventListener('click',onSalirConClicWindow);
    },[] )

    return (
        <div>
            <h1>Modal Sample</h1>

            <button id="myBtn" onClick={onModalOpen}>Open Modal</button>

            <div id="myModal" className="modal">

                <div className="modal-content">
                    <span className="close" onClick={onCloseModal}>&times;</span>
                    <ProductoDetallePage />
                </div>

            </div>
        </div>
    );
}

export { ModalSample as default };