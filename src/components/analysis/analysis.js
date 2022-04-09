import React from 'react';
import './analysis.scss';

function Analysis() {

    return (
        <React.Fragment>
           <a href="/weekly-analysis/NAS100"><button className="nas">NAS100</button></a>
           <a href="/weekly-analysis/XAUUSD"><button className="xau">XAUUSD</button></a>
           <a><button className="eur">EURUSD</button></a>
           <a><button className="cad">CADUSD</button></a>
           <a><button className="nzd">NZDUSD</button></a>
           <a><button className="aud">AUDUSD</button></a>
           <a><button className="gbp">GBPUSD</button></a>
           <a><button className="usd">USDJPY</button></a>
        </React.Fragment>
    );
};
   
  export default Analysis;