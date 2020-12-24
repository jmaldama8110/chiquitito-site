import React, { useContext } from 'react';

import authContext from '../../context/authContext';

const PerfilChip = ({onLogout}) => {

    const { userData } = useContext(authContext);

    return (
        <div className="perfilchip">
            <img src={userData.picture.data.url} alt="Person" width="96" height="96" />
            <div>
                <span>{userData.first_name}</span>
                <button onClick={onLogout}>Cerrar Sesion</button>
            </div>


        </div>
    );
}
export { PerfilChip as default };