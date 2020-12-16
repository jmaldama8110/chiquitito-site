export default (articulosArray) => {

    const conteo = articulosArray.length;
    let suma = 0;
    
    articulosArray.forEach( (item) => suma = suma + parseFloat(item.subtotal) );

    const envio = suma < 1800 && suma > 0 ? 145 : 0

    return {
        conteo,
        total: suma,
        totalMasEnvio : suma + envio,
        envio
    }

}