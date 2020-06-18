import React from 'react';
import Encabezado from './Admin-Encabezado';
import TituloProyecto from './Admin-TituloProyecto';
import config from '../config.json';
const img = config.assets + "img/";


function PanelAdmin(params) {


    return (
        <React.Fragment>
            <Encabezado />  
            {
                params.item &&
                <TituloProyecto item={params.item} />
            }
            

        </React.Fragment>
    );

}

export default PanelAdmin