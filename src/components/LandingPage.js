
import React, { useEffect, useReducer } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BannerCarousel from './BannerCarousel';
import CategoriasGridLista from './CategoriasGridLista';

export const LandingPage = () => {


    return (
        <div>
            <Header />
            <BannerCarousel />
            <CategoriasGridLista />

            <Footer />
        </div>
    );

}

export default LandingPage;