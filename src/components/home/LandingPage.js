import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

import BannerCarousel from './BannerCarousel';
import CategoriasLista from '../categorias/CategoriasLista';
import Footer from './Footer';


export const LandingPage = () => {

    return (
        <div>
            <Header />
            <BannerCarousel />
            <div className='categorias'>
                <h2 className='text-center my-2'>Categorias</h2>
                <div className='container flexible'>
                    
                    <CategoriasLista />
                </div>
            </div>
            <Footer />
        </div>
    );


}

export default LandingPage;