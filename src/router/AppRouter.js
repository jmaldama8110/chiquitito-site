import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

import LandingPage from '../components/home/LandingPage';
import CarritoAdmin from '../components/carrito/CarritoAdmin';
import FormaPago from '../components/usuario/FormaPago';

import PedidosAdmin from '../components/pedidos/PedidosAdmin';
import ClienteInfo from '../components/usuario/ClienteInfo';

import ProductosLista from '../components/categorias/ProductosLista';

import PoliticaPrivacidadPage from '../components/home/_PoliticaPrivacidadPage';
import CondicionesServicioPage from '../components/home/_CondicionesServicioPage';
import NotFoundPage from '../components/home/NotFound';

export const history = createHistory();

const AppRouter = ()=> (
    <Router history={history}>
    <div>
        <Switch>
            <Route path="/" component={LandingPage} exact={true}/>
            <Route path="/carrito" component={CarritoAdmin} exact={true} />
            <Route path="/pedidos" component={PedidosAdmin} exact={true} />
            <Route path='/clienteinfo' component={ClienteInfo} exact={true} />
            <Route path="/formapago/:pedidoid" component={FormaPago} exact={true} />
            <Route path="/politica-privacidad" component={PoliticaPrivacidadPage} exact={true} />
            <Route path="/condiciones-servicio" component={CondicionesServicioPage} exact={true} />
            <Route path="/categorias/:tipo" component={ProductosLista} exact={true} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>

    </Router>
);

export default AppRouter;