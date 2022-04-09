import React from "react";
import "../../Static/Styles/Landing.css";
import { Button } from 'react-bootstrap';
import LandingFamily from '../../Static/Images/LandingFamily.png';
import LandingGroceries from '../../Static/Images/LandingGroceries.png';
import LandingSafari from '../../Static/Images/LandingSafari.png';

function Landing() {
    return (
        <>
            <div className="LandingContainer">
                <div style={{bottom: '60%', position: 'absolute'}}>
                    <h1 className="HeadingBold">MusePay.</h1>
                    <h4 className="HeadingLight" style={{marginTop: 30, marginBottom: 30}}>Secure financial hub for spending and<br/>lending within social groups and families.</h4>
                    <Button variant="dark">Get Started ✌️</Button>
                    <Button variant="outline-dark" style={{marginLeft: 5}}>Our Mission</Button>
                </div>
                <img src={LandingFamily} style={{left: '3%', bottom: '15%', height: '50%', position: 'absolute', zIndex: 1}} alt="Family Activity" />
                <img src={LandingGroceries} style={{right: '10%', bottom: 0, height: '30%', position: 'absolute', zIndex: 1}} alt="Groceries" />
                <img src={LandingSafari} style={{left: 0, bottom: 0, height: '50%', position: 'absolute'}} alt="Safari" />
            </div>
        </>
    )
}

export default Landing;