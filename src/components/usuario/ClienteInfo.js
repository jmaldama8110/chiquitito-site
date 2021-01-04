import React, { useState, useEffect, useContext } from 'react';

import { history } from '../../router/AppRouter';
import authContext from '../../context/authContext';
import totalCarrito from '../../selectors/carritoTotales';
import db from '../../firebase/firebase';

import Loader from '../home/Loader';

const ClienteInfo = () => {

    const [loading, setLoading] = useState(true);

    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [direccion, setDireccion] = useState('');
    const [codigo_postal, setCodigoPostal] = useState('');
    const [estado, setEstado] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [numero_celular, setNumeroCelular] = useState('');
    const [registrado, setRegistrado] = useState(false);
    const [keyref, setKeyRef] = useState('');

    const [totales, setTotales] = useState({})
    const [carrito, setCarrito] = useState([]);

    const { userData } = useContext(authContext);


    useEffect(() => {

        onCargarDatos();

        /////////////// carga los datos del carrito de localstorage //////////////////
        const localData = JSON.parse(localStorage.getItem('carrito'));
        //////////////////////////////////////////////////////////////////////////////
        if (localData) {
            setCarrito(localData);
            setTotales(totalCarrito(localData));
        }
        //////////////////////////////////////////////////////////////////////////////


    }, []);

    const onCargarDatos = () => {

        db.ref('usuarios')
            .once('value')
            .then(snapshot => {

                const usuariosLista = [];

                snapshot.forEach(childSnapshot => {
                    usuariosLista.push({
                        keyref: childSnapshot.key,
                        ...childSnapshot.val()
                    }); // arreglo con todos los usuarios ha sido creado

                });
                const usuarioDb = usuariosLista.filter(i => i.usuario_facebook_id === userData.id);

                if (usuarioDb.length > 0) { // si se encontro el usuario, recupera los datos
                    setNombres(usuarioDb[0].nombres);
                    setApellidos(usuarioDb[0].apellidos);
                    setDireccion(usuarioDb[0].direccion);
                    setCodigoPostal(usuarioDb[0].codigo_postal);
                    setMunicipio(usuarioDb[0].municipio);
                    setEstado(usuarioDb[0].estado);
                    setNumeroCelular(usuarioDb[0].numero_celular);
                    setKeyRef(usuarioDb[0].keyref);
                    setRegistrado(true);
                } else {
                    // no encontro ningun registro
                    setNombres(userData.first_name);
                    setApellidos(userData.last_name);
                    setRegistrado(false);
                }

                setLoading(false);
            }).catch(e => console.log('error:', e));


    }

    const onContinuar = (e) => {
        e.preventDefault();

        setLoading(true);

        const usuarioDb = {
            nombres,
            apellidos,
            direccion,
            codigo_postal,
            estado,
            municipio,
            numero_celular,
            usuario_facebook_id: userData.id
        }

        if (!registrado) { // boolean que controla si el usuario fue encontrado en el metodo onCargarDatos

            const usuariosNodoRef = db.ref('usuarios');
            const usuarioNuevoRef = usuariosNodoRef.push();
            usuarioNuevoRef.set({
                ...usuarioDb
            }).then(() => {
                const pedidoDb = {
                    usuario_ref: usuarioNuevoRef.key,
                    estatus: 'A',
                    envio: totales.envio,
                    fecha_pedido: Date.now(),
                    total: totales.totalMasEnvio,
                    ...usuarioDb
                }
                const pedidosNodoRef = db.ref('pedidos');
                const pedidoNuevoRef = pedidosNodoRef.push();
                pedidoNuevoRef.set({
                    ...pedidoDb
                }).then(() => {

                    carrito.forEach( item => {
                        db.ref('pedido_items').push({
                            pedido_ref: pedidoNuevoRef.key,
                            ...item
                        })
                    });

                    localStorage.clear();
                    setLoading(false);
                    history.push(`/formapago/${pedidoNuevoRef.key}`);
                });
            })


        }
        else { // actualiza los datos del usuario encontrado previamente

            const pedidoDb = {
                usuario_ref: keyref,
                estatus: 'A',
                envio: totales.envio,
                fecha_pedido: Date.now(),
                total: totales.totalMasEnvio,
                ...usuarioDb
            }

            db.ref(`usuarios/${keyref}`).update(usuarioDb).then(() => {

            }).then(() => {
                const pedidosNodoRef = db.ref('pedidos');
                const pedidoNuevoRef = pedidosNodoRef.push();
                pedidoNuevoRef.set({
                    ...pedidoDb
                }).then(() => {

                    carrito.forEach( item => {
                        db.ref('pedido_items').push({
                            pedido_ref: pedidoNuevoRef.key,
                            ...item
                        })
                    });

                    localStorage.clear();
                    setLoading(false);
                    history.push(`/formapago/${pedidoNuevoRef.key}`);
                });

            })


        }
    }

    return (
        <div>

            {
                loading ? <Loader />
                    :
                    <div className='contenido-centrado'>
                        <h1>Datos de Entrega</h1>
                        <div className='formulario-container'>
                            <form onSubmit={onContinuar}>

                                <label>Nombre(s)</label>
                                <input type='text' id='nombresId' placeholder='Nombre(s)' defaultValue={nombres} onChange={(e) => setNombres(e.target.value)}></input>

                                <label>Apellido(s)</label>
                                <input type='text' id='apellidosId' placeholder='Apellido(s)' defaultValue={apellidos} onChange={(e) => setApellidos(e.target.value)}></input>

                                <label>Calle y numero</label>
                                <input type="text" placeholder="Direccion(Calle y numero, colonia, etc)" defaultValue={direccion} onChange={(e) => setDireccion(e.target.value)}></input>

                                <label>Codigo postal</label>
                                <input type="text" placeholder="Codigo postal" defaultValue={codigo_postal} onChange={(e) => setCodigoPostal(e.target.value)}></input>

                                <label>Estado</label>
                                <input type='text' id='estadoId' placeholder='Estado' defaultValue={estado} onChange={(e) => setEstado(e.target.value)}></input>

                                <label>Municipio o Ciudad</label>
                                <input type='text' id='municipioId' placeholder='Municipio/Ciudad' defaultValue={municipio} onChange={(e) => setMunicipio(e.target.value)}></input>

                                <label>Numero de celular</label>
                                <input type="text" placeholder="Telefono Celular" defaultValue={numero_celular} onChange={(e) => setNumeroCelular(e.target.value)}></input>

                                <input type="submit" value="Continuar" />

                            </form>

                        </div>
                    </div>
            }
        </div>

    );
}

export default ClienteInfo;