import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

import LandingPage from '../components/home/LandingPage';
import CarritoAdmin from '../components/carrito/CarritoAdmin';
import FormaPago from '../components/usuario/FormaPago';
import PedidoRegistro from '../components/pedidos/PedidoRegistro';
import PedidosAdmin from '../components/pedidos/PedidosAdmin';

import ProductosLista from '../components/categorias/ProductosLista';


export const history = createHistory();

const AppRouter = ()=> (
    <Router history={history}>
    <div>
        <Switch>
            <Route path="/" component={LandingPage} exact={true}/>
            <Route path="/carrito" component={CarritoAdmin} exact={true} />
            <Route path="/pedidos" component={PedidosAdmin} exact={true} />
            <Route path="/formapago" component={FormaPago} exact={true} />
            <Route path="/pedidoregistro" component={PedidoRegistro} exact={true} />
            <Route path="/categorias/:tipo" component={ProductosLista} exact={true} />
        </Switch>
    </div>

    </Router>
);

export default AppRouter;