import React from 'react';




function TituloProyecto(params) {


    return (
        <div className="row">
            <div className="col-sm-10 m-2">                
                <h2>{params.item.nombre }</h2>
            </div>           
        </div>
    );
}

export default TituloProyecto