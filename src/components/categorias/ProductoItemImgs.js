import React from 'react';

const ProductoItemImgs = ({ imgItem, fxOnClickExplorarImagen }) => {

    return imgItem.imgs.map((i) =>
        <div className='col-tab'>
            <img src={`/images/productos/${imgItem.foldersource}/${i.fs}`} alt={i.titulo} onClick={fxOnClickExplorarImagen}></img>
        </div>);
}

export { ProductoItemImgs as default };