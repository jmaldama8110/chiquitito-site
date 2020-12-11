import React from 'react';
import CategoriasItem from './CategoriasItem';

const CategoriasLista = () => {

    const categorias = [
        { id: 1, ruta: "categorias/panales-toallas.png", tipo: "panales", nombre: "Pañales y toallas", descripcion: "Pañales de tela, toallas femeninas y complementos" },
        { id: 2, ruta: "categorias/materiales.png", tipo: "telas", nombre: "Telas e insumos", descripcion: "Telas y materiales para elaborar pañales y toallas" },
        { id: 3, ruta: "categorias/cursos.png", tipo: "cursos", nombre: "Cursos y talleres", descripcion: "Cursos en línea y presenciales, videos y más" },
        { id: 4, ruta: "categorias/otros.png", tipo: "otros", nombre: "Otros productos", descripcion: "Artículos ecológicos y para alimentación" }];


    return categorias.map((i) =>

        <div className='column'>
            <CategoriasItem
                key={i.id}
                item={i}
            />
        </div>

    );
}

export default CategoriasLista;
