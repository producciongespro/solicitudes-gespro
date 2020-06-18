import React from 'react';
import config from '../config.json';
const img = config.assets + "img/";


function Encabezado(params) {


    return (
        <div className="row bg-primary text-white p-2">
            <div className="col-sm-3 text-center">
                <h5>PENDIENTES</h5>
            </div>
            <div className="col-sm-3 text-center">
                <h5>EN PRODUCCIÓN</h5>
            </div>
            <div className="col-sm-3 text-center">
                <h5>CONCLUIDOS</h5>
            </div>
            <div className="col-sm-3 text-right">
                Crear informe
        </div>
        </div>
    );
}

export default Encabezado