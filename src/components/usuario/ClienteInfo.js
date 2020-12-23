import React, { useContext } from 'react';
import PerfilChip from './PerfilChip';

import { history } from '../../router/AppRouter';
import authContext from '../../context/authContext';


const ClienteInfo = () => {

    const { userData } = useContext(authContext);

    function onContinuar(e) {
        e.preventDefault();
        history.push('/FormaPago')
    }

    return (

        <div className='contenido-centrado'>
            <h1>Datos de Entrega</h1>
            { userData.conectado ?
                <div className='formulario-container'>
                    <form onSubmit={onContinuar}>

                        <PerfilChip />

                        <label>Nombre(s)</label>
                        <input type='text' id='nombresId' value={userData.first_name} placeholder='Nombre(s)'></input>

                        <label>Apellido(s)</label>
                        <input type='text' id='apellidosId' value={userData.last_name} placeholder='Apellido(s)'></input>

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
                :
                <div>
                    <p>Para registrar tu pedido, inicia sesion con Facebook</p>
                </div>
            }
        </div>
    );
}

export default ClienteInfo;