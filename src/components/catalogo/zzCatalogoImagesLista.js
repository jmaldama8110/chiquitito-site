import React from 'react';

const CatalogoImagesLista = ({ imagesFolder, imagesCount }) => {

    // construye el array con los nombres de los archivos 1
    let array = [];
    for(let step = 1; step <= imagesCount; step++){
        array = [...array, (step.toString() +'.png' ) ]
    }

    console.log(array);
    
    const array2 = ['01.png','02.png','03.png']

    return array2.map((i) => {
        return (
            <div>
                <img src={`/images/productos/${imagesFolder}/${i}`}></img>
            </div>
        );
    })
}

export default CatalogoImagesLista;