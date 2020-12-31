import React, { useContext } from 'react';

import authContext from '../../context/authContext';

const PerfilChip = () => {

    const { userData } = useContext(authContext);

    return (
        <div className="perfilchip">
            <img src={userData.picture.data.url} alt="Person" width="96" height="96" />
            {`${userData.first_name} ${userData.last_name}`}
            
        </div>
    );
}
export { PerfilChip as default };