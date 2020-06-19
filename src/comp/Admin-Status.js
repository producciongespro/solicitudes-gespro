import React from 'react';

const prioridades = ["Bajo", "Medio", "Alto"];



function Status(params) {


    return (
        <div className="row ">
            <div className="col-sm-2">
                <strong>Nivel de prioridad</strong>
                {
                    console.log(params.item.prioridad)
                    
                }

                <div className="input-group mb-3">                    
                    <select className="custom-select" id="selPrioridades">
                    {
                        prioridades.map((item, i) => {(
                            <option key={"prioridad" + i} value={item}> {item} </option>
                        )}
                        )
                    }
                    </select>
                </div>

               
            </div>
            <div className="col-sm-5">
                <strong>Categoría</strong>


            </div>
            <div className="col-sm-5">
                <strong>Estado del proyecto</strong>
            </div>

        </div>
    );
}

export default Status