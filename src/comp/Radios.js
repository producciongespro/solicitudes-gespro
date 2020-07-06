import React from 'react';

function Radios(props) {


    return (
        <div className="col-sm-12">
            {
                props.array.map((item, i)=>(
                    <div className="form-check" key={i}>
                        <input className="form-check-input" type="radio" name="exampleRadios" id={"radio"+i} defaultValue={i} />
                        <label className="form-check-label" htmlFor={"radio"+i}>
                            {item}
                        </label>
                    </div>
                ))
            }
        </div>
    )
}

export default Radios;