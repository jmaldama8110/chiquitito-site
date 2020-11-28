import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

import Login from '../components/usuario/Login';
import LandingPage from '../components/home/LandingPage';
import CatalogoAdmin from '../components/catalogo/CatalogoAdmin';
import CarritoAdmin from '../components/carrito/CarritoAdmin';
import FormaPago from '../components/usuario/FormaPago';
import PedidoRegistro from '../components/pedidos/PedidoRegistro';
import PedidosAdmin from '../components/pedidos/PedidosAdmin';

import ProductosCategoriaAdmin from '../components/categorias/ProductosCategoriaAdmin';


// import ProtectedRoute from './ProtectedRoute';
// import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = ()=> (
    <Router history={history}>
    <div>
        <Switch>
            <Route path="/" component={LandingPage} exact={true}/>
            <Route path="/login" component={Login} exact={true} />
            <Route path="/catalogo" component={CatalogoAdmin} exact={true} />
            <Route path="/carrito" component={CarritoAdmin} exact={true} />
            <Route path="/pedidos" component={PedidosAdmin} exact={true} />
            <Route path="/formapago" component={FormaPago} exact={true} />
            <Route path="/pedidoregistro" component={PedidoRegistro} exact={true} />
            <Route path="/categorias/:tipo" component={ProductosCategoriaAdmin} exact={true} />
        </Switch>
    </div>

    </Router>
);

export default AppRouter;