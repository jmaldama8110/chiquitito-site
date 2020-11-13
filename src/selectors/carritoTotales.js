export default (articulosArray) => {

    const conteo = articulosArray.length;
    let suma = 0;
    
    articulosArray.forEach( (item) => suma = suma + parseFloat(item.subtotal) );
    
    return {
        conteo,
        total: suma
    }

}