import React from 'react'
import {Link} from 'react-router-dom';
import Header from './Header';

const PoliticaPrivacidadPage = () => {

    return (
    <div>
        <Header />
        <div className='contenido-centrado'>
            <h1>Política de privacidad</h1>
            <p>
            Aviso de Privacidad: 
            CHIQUITITODETALLES SA DE CV con domicilio en 2a Norte Oriente 1804
             Barrio La Pimienta, de la ciudad de Tuxtla Gutiérrez, Chiapas, CP. 29000, es responsable
              de la confidencialidad, uso y protección de la información personal que en su caso nos proporciona. 
              Por lo anterior la información personal que le solicitamos dentro de las cuales se encuentran sus datos personales de identificación,
               así como los datos respecto a su información de domicilios, únicamente será utilizada para identificarle en las relaciones
                comerciales que realice con nosotros y para fines mercadológicos.
                 Para el caso que desee limitar el uso o divulgación de su información personal, ejercitar sus derechos de acceder, rectificar y
                  cancelar sus datos personales, así como de oponerse al tratamiento de los mismos o revocar el consentimiento que para tal fin nos haya otorgado, 
                  lo podrá realizar a través de los siguientes canales de atención: vía telefónica al número (961) 2521968 o través de 
                  nuestro correo electrónico chiquititodetalles@gmail.com, en donde se le informarán los procedimientos establecidos 
                  para el ejercicio de los derechos aquí señalados. En caso de cambios al presente aviso, los podrán consultar en la página 
                  https://www.chiquititodetalles.com, informándole que dicho sitio tiene implementados candados de seguridad y otras herramientas 
                  de rastreo de seguridad del sitio.
            
            </p>
            <Link to='/'>Acepto</Link><br />
            <a href='https://google.com'>No Acepto</a>
        </div>
    </div>
    );
}

export { PoliticaPrivacidadPage as default };