import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';

import carritoReducer from '../../reducers/carritoReducer';
import CarritoLista from '../carrito/CarritoLista';
import totalCarrito from '../../selectors/carritoTotales';

import carritoContext from '../../context/carritoContext';

import Header from '../home/Header';

const CarritoAdmin = () => {


    const [carrito, dispatchCarrito] = useReducer(carritoReducer, []);
    const [envioPor, setEnvioPor] = useState('');
    const [precioEnvio, setPrecioEnvio] = useState(0);
    const [total, setTotal] = useState(0);
    const [totalMasEnvio, setTotalMasEnvio] = useState(0)



    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('carrito'));
        const localEnvio = JSON.parse(localStorage.getItem('delivery'));


        if (localData) {
            const totales = totalCarrito(localData);
            setTotal(totales.total);
            dispatchCarrito({ type: 'POPULATE_CARRITO', carrito: localData });
        }

        if (localEnvio) {
            setEnvioPor(localEnvio.envioPor);
            setPrecioEnvio(localEnvio.precioEnvio)
        }


    }, []);


    useEffect(() => { // cuando se actualiza la lista de articulos

        localStorage.setItem('carrito', JSON.stringify(carrito));

        const totales = totalCarrito(carrito);
        setTotal(parseFloat(totales.total));
        setTotalMasEnvio(parseFloat(totales.total) + parseFloat(precioEnvio));

    }, [carrito]);



    return (
        <div>
            <Header />
            <div className='contenido-centrado'>
                <carritoContext.Provider value={{ carrito, dispatchCarrito }}>

                    <h3>Mi carrito</h3>
                    <table>
                        <tr>
                            <th></th>
                            <th>Articulo</th>
                            <th>Color/estampado</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Unidad</th>
                            <th>Total</th>
                        </tr>
                        <CarritoLista />
                    </table>

                </carritoContext.Provider>

                {
                    total > 0
                        ? /// muestra el resumen de total //////
                        <div>
                            <h2>Total {carrito.length} articulos 
                                { envioPor!=='local' ? ` = $${total} + ${envioPor}(${precioEnvio}) = `  : ' = '}
                                
                                ${totalMasEnvio}</h2>
                            <div>
                                <p>Selecciona Envio:</p>
                                <input type="radio" id="fedex" name="envio" value="fedex" onClick={e => {
                                    setEnvioPor(e.target.value);
                                    setPrecioEnvio(175);
                                    setTotalMasEnvio(total + 175);
                                    localStorage.setItem('delivery', JSON.stringify({ envioPor:'fedex', precioEnvio:'175' }))
                                }} /><label for="fedex">Fedex ($175)</label><br />

                                <input type="radio" id="redpack" name="envio" value="redpack" onClick={e => {
                                    setEnvioPor(e.target.value);
                                    setPrecioEnvio(128);
                                    setTotalMasEnvio(total + 128);
                                    localStorage.setItem('delivery', JSON.stringify({ envioPor:'estafeta', precioEnvio:'128' }))
                                }} /><label for="estafeta">Redpack ($128)</label><br />

                                <input type="radio" id="local" name="envio" value="local" onClick={e => {
                                    setEnvioPor(e.target.value);
                                    setPrecioEnvio(0);
                                    setTotalMasEnvio(total);
                                    localStorage.setItem('delivery', JSON.stringify({ envioPor:'local', precioEnvio:'0' }))
                                }} /><label for="local">Envio Local { envioPor==='local' ? `(* Lo paga el cliente al recibir el producto +/- $45 pesos en promedio...)`:``}</label>

                            </div>
                            <p></p>
                            <Link to="/pedidos" className='btn btn-primary'>Finalizar compra</Link><p></p>
                            <Link to='/' className='btn btn-dark'>Continuar comprando</Link>
                        </div> /////////////////////////////////////////////

                        :
                        <div>
                            <p>Aun no has agregado articulos a tu carrito...</p>
                            <Link to='/' className='btn btn-secondary'>Regresar</Link>
                        </div>
                }

            </div>
        </div>
    );

}

export default CarritoAdmin;