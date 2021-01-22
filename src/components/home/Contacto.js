import React from 'react';

import Header from './Header';

const Contacto = () => {

 
    return (
        <div>
            <Header />
            <div className='contenido-centrado'>
                <h1>Nuestra ubicación</h1>
                <h4>Llamanos al: 9612521968</h4>
                <p>2a Norte Oriente 1804, Barrio La Pimienta <br/>
                Tuxtla Gutierrez, Chiapas <br/>
                CP: 29034
                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d955.0387964096681!2d-93.11197221189187!3d16.768953099274714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd89642145f9b%3A0x7667b45391aeaa28!2sCalle%202a.%20Ote.%20Nte.%201804%2C%20La%20Pimienta%2C%2029034%20Tuxtla%20Guti%C3%A9rrez%2C%20Chis.!5e0!3m2!1ses!2smx!4v1611347518748!5m2!1ses!2smx" 
                width='100%' height="450px" frameBorder='0' style={{border:'0'}} allowFullScreen="" aria-hidden="false" tabindex="0"></iframe>

            </div>

        </div>
    );
}
export { Contacto as default };