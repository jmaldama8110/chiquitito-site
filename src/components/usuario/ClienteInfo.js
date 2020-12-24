import React from 'react';

import { history } from '../../router/AppRouter';

const ClienteInfo = () => {

    function onContinuar(e) {
        e.preventDefault();
        history.push('/FormaPago')
    }

    return (

        <div className='contenido-centrado'>
            <h1>Datos de Entrega</h1>
                <div className='formulario-container'>
                    <form onSubmit={onContinuar}>

                        <label>Nombre(s)</label>
                        <input type='text' id='nombresId' placeholder='Nombre(s)'></input>

                        <label>Apellido(s)</label>
                        <input type='text' id='apellidosId' placeholder='Apellido(s)'></input>

                        <label>Calle y numero</label>
                        <input type="text" placeholder="Calle y numero de casa"></input>

                        <label>Codigo postal</label>
                        <input type="text" placeholder="Codigo postal"></input>

                        <label>Estado</label>
                        <select id='entidadfederativa' >
                            <option value='1'>Chiapas</option>
                            <option value='2'>Tabasco</option>
                            <option value='3'>Veracruz</option>
                            <option value='4'>Otro</option>
                        </select>


                        <label>Municipio</label>
                        <select id='municipioId' >
                            <option value='1'>Tuxtla Gtz</option>
                            <option value='2'>San Cristobal</option>
                            <option value='3'>Tapachula</option>
                            <option value='4'>Otro</option>
                        </select>

                        <label>Numero de celular</label>
                        <input type="text" placeholder="Telefono Celular"></input>

                        <input type="submit" value="Continuar" />

                    </form>

                </div>            
        </div>
    );
}

export default ClienteInfo;