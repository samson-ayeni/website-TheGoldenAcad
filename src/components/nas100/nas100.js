import React from 'react';
import './nas100.scss';

function NAS() {
    return (
        <React.Fragment>
            <h1 className="trend">Market Direction</h1>
            <h3 className="trend">Monthly:<span className="up">Accumulation</span></h3>
            <h3 className="trend">Weekly:<span className="down">Accumulation</span></h3>
            <h3 className="trend">Daily:<span className="up">Accumulation</span></h3>
            <h3 className="trend">4H:<span className="down">Accumulation</span></h3>
            <h3 className="trend">1H:<span className="up">Accumulation</span></h3>


            <h1 className="m-title">Monthly</h1>
            <img className="monthly"></img>

            <h1 className="w-title">Weekly</h1>
            <img className="weekly"></img>

            <h1 className="d-title">Daily</h1>
            <img className="daily"></img>

            <h1 className="f-title">4H</h1>
            <img className="fourHour"></img>
            
            <h1 className="o-title">1H</h1>
            <img className="oneHour"></img>

        </React.Fragment>   
    );
}
   
  export default NAS;