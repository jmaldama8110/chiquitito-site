import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

import LoginPage from '../components/LoginPage';
import LandingPage from '../components/LandingPage';
import CatalogoAdmin from '../components/CatalogoAdmin';
import CarritoAdmin from '../components/CarritoAdmin';

// import ProtectedRoute from './ProtectedRoute';
// import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = ()=> (
    <Router history={history}>
    <div>
        <Switch>
            <Route path="/" component={LandingPage} exact={true}/>
            <Route path="/login" component={LoginPage} exact={true} />
            <Route path="/catalogo" component={CatalogoAdmin} exact={true} />
            <Route path="/carrito" component={CarritoAdmin} exact={true} />
        </Switch>
    </div>

    </Router>
);

export default AppRouter;