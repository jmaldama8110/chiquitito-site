import React from 'react';

import { Link } from 'react-router-dom';

const OrdenFinal = ({ data }) => {

    return (
        <div className='pdfviewer'>
            <img src='/favicon.png' alt='' width={'50px'}></img>

            <p className='md'>Orden No: {data.pedidoIdShort}</p>
            Instrucciones: <br />
            <p style={{ fontWeight: 'bold' }}>
                1. Imprime esta hoja <br />
            2. Realiza tu pago como lo haz elegido en Medio de Pago <br />
            3. Envia tu hoja de pedido y el comprobante de pago al 9612521968 o al correo chiquititobebeventas@gmail.com <br />
            </p>
            <p> Para: {`${data.nombres}`}<br />
                Numero de contacto: {data.numero_celular} <br />
                Medio de pago: {data.metodopago} <br />
                Pagar a Cuenta o tarjeta: {data.cuentaTDD}<br />
                Importe: {data.totalMasEnvio}<br />
                Costo envio: ${data.precioEnvio}<br />
                Pago esperado antes del: {data.diaPago}<br />
                Envio por: {data.envioPor}<br />
            </p>

            <table>
                <tr>

                    <th>Articulo</th>
                    <th>Color / estampado</th>
                    <th>Unidad</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Subtotal</th>
                </tr>
                {data.pedidoItems
                    .map(
                        i =>
                            <tr>
                                <td>{i.nombre_producto}</td>
                                <td>{i.imagen_titulo}</td>
                                <td>{i.unidad}</td>
                                <td>{i.cantidad}</td>
                                <td>{i.precio}</td>
                                <td>{i.subtotal}</td>
                            </tr>
                    )}

            </table>
            <p></p>
            <Link className='btn btn-primary' onClick={() => window.print()}>Imprimir</Link>
            <p></p>
            <Link className='btn btn-secondary' to='/'>Regresar</Link>
        </div>
    );
}

export { OrdenFinal as default }