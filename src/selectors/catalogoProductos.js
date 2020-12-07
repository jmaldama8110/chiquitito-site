// Aplicar filtros
export default (productosArray, { busquedaTexto, ordenarPor }) => {

    return productosArray.filter( (item)=> {
        
        const textoLogica = !busquedaTexto || item.descripcion.toLowerCase().search( busquedaTexto.toLowerCase() ) != -1;
        
        return textoLogica;
        
    }).sort( (a,b) => {
        const tipoOrden = -1;

        if( ordenarPor === 'precio' ){
            return a.precio < b.precio ? tipoOrden: tipoOrden*(-1);
        }
    })
}
