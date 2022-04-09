import React from 'react';
import './home.scss';

function Home() {
    return (
        <div>
            <div className="fxIntro">WHAT IS FOREX?</div>

            <div className="fxStep1">The Global Market Exchanges National Currencies; US Dollars, European Euro, British Pound, etc.</div>
            <div className="fxStep1-pic"></div>
            <div className="arrow1-pic"></div>

            <div className="fxStep2">We Step in Between This Market <span className="gold-text">VIRTUALLY.</span>&</div> {/* & add an extra space when using span */}
            <div className="fxStep2-pic"></div>
            <div className="arrow2-pic"></div>

            <div className="fxStep3">We Predict If Any Of The Currencies Will Go <span className="gold-text"> UP or DOWN.</span>&</div>
            <div className="fxStep3-pic"></div>
            <div className="arrow3-pic"></div> 
            
            <div className="fxStep4">If Our Prediction Is Correct We Can&nbsp;<span className="gold-text">WIN</span></div>
            <div className="fxStep4-1">Money or <span className="gold-text">LOSE.</span>&</div>
            <div className="fxStep4-pic"></div>
        </div>    
    );
}
   
  export default Home;