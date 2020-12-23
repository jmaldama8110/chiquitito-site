
export default ( state = {}, action ) => {

    switch( action.type ) {

        case 'LOGIN':
        return action.usuarioData;
        
        case 'LOGOUT':
            return {
                
            };

        default:
            return state;
            
    }
};