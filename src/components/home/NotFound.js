import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

const NotFoundPage = () => (
    <div>
        <Header />  
        Sitio no encontrado (404)! - <Link to="/">Regresar</Link>
    </div>
);

export default NotFoundPage;