import React from 'react';

import Header from './Header';
import Footer from './Footer';
import BannerCarousel from './BannerCarousel';
import CategoriasLista from '../categorias/CategoriasLista';

export const LandingPage = () => {

    return (
        <div>
            <Header />
            <BannerCarousel />
            <CategoriasLista />

            <Footer />
        </div>
    );

}

export default LandingPage;