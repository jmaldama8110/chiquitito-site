import React, {useEffect} from 'react';

const Alertamsg = ({ mensaje, tipo }) => {

    const cerrarAlerta = (e) => {

        const divParent = e.target.parentElement;
        divParent.style.opacity = '0';
        
        setTimeout(() => divParent.style.display = 'none', 600);

    }

    useEffect( ()=>{
        const divParent = document.getElementById('02029d039j20d');
        divParent.style.backgroundColor = tipo;

    },[]);


    return (
        <div className="alertamsg" id='02029d039j20d'>
            <span className="alertamsg-closebtn" onClick={cerrarAlerta}>&times;</span>
                    {mensaje}
        </div>

    );
}

export { Alertamsg as default };