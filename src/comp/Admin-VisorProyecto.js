import React from 'react';
import Encabezado from './Admin-Encabezado';
import TituloProyecto from './Admin-TituloProyecto';
import Status from './Admin-Status';
import config from '../config.json';
const img = config.assets + "img/";


function PanelAdmin(params) {


    return (
        <React.Fragment>
            <Encabezado />
            {
                params.item &&
                (
                    <React.Fragment>
                        <TituloProyecto item={params.item} />
                        <Status item={params.item} />
                    </React.Fragment>
                )
            }


        </React.Fragment>
    );

}

export default PanelAdmin