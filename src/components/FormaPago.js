import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import BannerCarousel from './BannerCarousel';

const FormaPago = () => {

    return (
        <div>
            <Header />
            
            <h3>Formas de pago</h3>
            <div>
                <img src="/images/medios-pago/pago-icono.png"></img>
            </div>

            <div>
                <input type="radio" id="op1" name="medios-pago" value="op1" />
                <label for="op1">Deposito OXXO</label> <br></br>

                <input type="radio" id="op2" name="medios-pago" value="op2" />
                <label for="op2">Transferencia SPEI</label> <br></br>

                <input type="radio" id="op3" name="medios-pago" value="op3" />
                <label for="op3">Deposito bancario</label> <br></br>

                <input type="radio" id="op4" name="medios-pago" value="op4" />
                <label for="op4">Efectivo</label> <br></br>

                <Link to="/pedidoregistro">
                    <p>Finalizar</p>
                </Link>

                <div>
                    <img src='/images/medios-pago/spei.png'></img>
                </div>

                <div>
                    <img src='/images/medios-pago/oxxo-logo.png'></img>
                </div>

                <div>
                    <img src='/images/medios-pago/bbva.png'></img>
                </div>


            </div>
            <Footer />
        </div>

    );
}

export default FormaPago;