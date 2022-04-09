import React from 'react';
import './intro.scss';

function Intro() {
    return (
        <React.Fragment>
            <div className="introTitle">
                <text>THE GOLDEN ACADEMY</text> {/*main title*/}
            </div>

            <a href ="/home"><button className="introButton">Follow Me To Financial Freedom</button></a> {/*enter site button*/}
            
            <div className="introQuote">
                <text>"There is Power in <text>The &emsp; &emsp; &emsp; &emsp; &nbsp;Effect</text>"</text> {/*quote starts*/}
            </div>

                <div className="content">             
                    <div className="css">Compound</div>
                    <div className="css">Compound</div>
                    <div className="css">Compound</div>
                    <div className="css">Compound</div>
                    <div className="css">Compound</div>
                    <div className="css">Compound</div>
                    <div className="css">Compound</div>
                    <div className="css">Compound</div>
                    <div className="css">Compound</div>
                    <div className="css">Compound</div>
                </div>                            {/* quote end*/}

            <img className="money1" alt="money bag"/> {/*fun click animation of money start*/}
            <img className="money2" alt="money bag"/> 
            <img className="money3" alt="money bag"/> 
            <img className="money4" alt="money bag"/>
            <img className="money5" alt="money bag"/> 

            <img className="money6" alt="money bag"/> 
            <img className="money8" alt="money bag"/> 
            <img className="money9" alt="money bag"/>
            <img className="money10" alt="money bag"/> 

            <img className="money11" alt="money bag"/> 
            <img className="money12" alt="money bag"/> 
            <img className="money13" alt="money bag"/> 
            <img className="money14" alt="money bag"/>
            <img className="money15" alt="money bag"/> {/*fun click animation of money end*/}

            <img className="road" alt="the road"/> {/*road picture*/}
            <img className="man" alt="the man"/> {/*road picture*/}
        
        </React.Fragment>    
    )
}
   
  export default Intro;