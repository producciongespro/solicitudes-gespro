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
                        <option value={prioridades[0]} > {prioridades[0]} </option>
                        <option value={prioridades[1]} > {prioridades[1]} </option>
                        <option value={prioridades[2]} > {prioridades[2]} </option>
                    </select>
                </div>


            </div>
            <div className="col-sm-5">
                <strong>Categoría</strong>
                <div class="pretty p-default p-round">
                    <input type="checkbox" />
                    <div class="state p-success-o">
                        <label>Gestionados</label>
                    </div>
                </div>

                <div class="pretty p-default p-round">
                    <input type="checkbox" />
                    <div class="state p-success-o">
                        <label>Contratación</label>
                    </div>
                </div>

            </div>
            <div className="col-sm-5">
                <strong>Estado del proyecto</strong>
            </div>

        </div>
    );
}

export default Status