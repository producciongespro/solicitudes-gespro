import React from 'react';



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
            <i className="fas fa-plus" /> Crear informe 
            <i className="far fa-bell mx-2" /> 
            <i className="fas fa-user mx-2" />
        </div>
        </div>
    );
}

export default Encabezado