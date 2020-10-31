
  const catalogoReducer = (state, action) => {
    
    switch( action.type ) {
    
      case 'ADD_CATALOGO':
        return [...state, action.producto ];
      
      case 'REMOVE_CATALOGO':
        return state.filter( (item)=> item.producto_id !== action.producto_id)

      case 'POPULATE_CATALOGO':
        return action.catalogo;

      default:
          return state;
    }
}

export default catalogoReducer;