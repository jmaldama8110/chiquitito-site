export default ( addDias,options ) => {
    // devuelte el formato de fecha en string acorde a los criterios de Options
    // options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today = new Date();
    var tomorrow = new Date(today);

    tomorrow.setDate(today.getDate()+ addDias );
    
    return tomorrow.toLocaleDateString('es-MX', options);

}
