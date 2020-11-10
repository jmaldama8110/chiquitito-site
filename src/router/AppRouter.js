import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

import Login from '../components/Login';
import LandingPage from '../components/LandingPage';
import CatalogoAdmin from '../components/CatalogoAdmin';
import CarritoAdmin from '../components/CarritoAdmin';
import PedidosAdmin from '../components/PedidosAdmin';
import CategoriasGridCatalogo from '../components/CategoriasGridCatalogo';

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
            <Route path="/categorias/:tipo" component={CategoriasGridCatalogo} exact={true} />
        </Switch>
    </div>

    </Router>
);

export default AppRouter;