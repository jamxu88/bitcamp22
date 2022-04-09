import React from "react";
import "../../Static/Styles/Landing.css";

function Landing() {
    return (
        <div className="LandingContainer">
            <div style={{marginBottom: 30, position: 'absolute'}}>
                <h1 className="HeadingBold">MusePay.</h1>
                <h3 className="HeadingLight">Secure financial hub for spending and<br/>lending within social groups and families.</h3>
            </div>
        </div>
    )
}

export default Landing;