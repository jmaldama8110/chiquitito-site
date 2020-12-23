import React, { useContext } from 'react';

import authContext from '../../context/authContext';

const PerfilChip = () => {

    const {userData, dispatchUserData} = useContext(authContext);

    return (
            <div className="perfilchip">
                <img src={userData.picture.data.url} alt="Person" width="96" height="96" />
                <div>
                    <p>{userData.first_name}</p>
                    <button onClick={(e)=> {
                        
                        window.FB.logout();
                        dispatchUserData({
                            type:'LOGOUT'                        
                        });
                        
                    }}>Cerrar Sesion</button>
                </div>
                    

            </div>
    );
}
export { PerfilChip as default };