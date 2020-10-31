
const carritoReducer = (state, action) => {

    switch( action.type ){

        case 'ADD_CARRITO':
            return [...state, action.articulo ];

        case 'REMOVE_CARRITO':
            return state.filter( (i)=> i.articulo_id !== action.articulo_id );

        case 'POPULATE_CARRITO': 
            return action.carrito;
            
        default:
            return state;

    }
};

export default carritoReducer;