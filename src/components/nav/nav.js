import React from "react";
import './nav.scss'

function Nav () {
    return (
        <div>
            <div className="menu">
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
            </div>

            <a href="/home"><div className="website-logo" alt="website-logo"/></a>

            <div className="nav"></div>

            <div className="help">Hover "HERE" To Start Learning </div>

                <div className="dropdownContainer">
                    <div className="dropdown">
                        <a href="/courses" className="dropdownTitle1">COURSES</a>
                        <div className="dropdownSection1">
                            <a href="/documents" className="dropdownTitle2">DOCUMENTS</a>
                        </div>
                        <div className="dropdownSection2">
                            <a href="/weekly-analysis" className="dropdownTitle3">WEEKLY ANALYSIS</a>
                        </div>
                        <div className="dropdownSection3">
                            <a href="/socials" className="dropdownTitle4">SOCIALS</a>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Nav;