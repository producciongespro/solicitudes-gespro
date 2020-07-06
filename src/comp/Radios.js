import React from 'react';

function Radios (props) {
    

    return (
        <div className="col-sm-12">
        
        <div className="form-check">
<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
<label className="form-check-label" htmlFor="exampleRadios1">
  Default radio
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
<label className="form-check-label" htmlFor="exampleRadios2">
  Second default radio
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" defaultValue="option3" disabled />
<label className="form-check-label" htmlFor="exampleRadios3">
  Disabled radio
</label>
</div>


        </div>
    )
}

export default Radios;