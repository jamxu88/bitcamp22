import React from "react";
import "../../Static/Styles/Landing.css";
import { Button, Modal } from 'react-bootstrap';
import LandingFamily from '../../Static/Images/LandingFamily.png';
import LandingGroceries from '../../Static/Images/LandingGroceries.png';
import LandingSafari from '../../Static/Images/LandingSafari.png';
import LandingExtension from '../../Static/Images/LandingExtension.png';
import LandingJames from '../../Static/Images/LandingJames.png';
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();
    const [showMission, setShowMission] = React.useState(false);

    const getStartedHandler = () => {
        return navigate("/dashboard");
    }

    return (
        <>
            <div className={showMission ? "LandingContainerBlur" : "LandingContainer"}>
                <div style={{bottom: '60%', position: 'absolute'}}>
                    <h1 className="HeadingBold">MusePay.</h1>
                    <h4 className="HeadingLight" style={{marginTop: 30, marginBottom: 30}}>Secure financial hub for spending and<br/>lending within social groups and families.</h4>
                    <Button variant="dark" onClick={() => getStartedHandler()}>Get Started ✌️</Button>
                    <Button variant="outline-dark" style={{marginLeft: 5}} onClick={() => setShowMission(true)}>Our Mission</Button>
                </div>
                <img src={LandingFamily} style={{left: '3%', bottom: '15%', height: '50%', position: 'absolute', zIndex: 1}} alt="Family Activity" />
                <img src={LandingGroceries} style={{right: '10%', bottom: 0, height: '30%', position: 'absolute', zIndex: 1}} alt="Groceries" />
                <img src={LandingSafari} style={{left: 0, bottom: 0, height: '50%', position: 'absolute'}} alt="Safari" />
                <img src={LandingExtension} style={{left: 0, top: '5%', height: '30%', position: 'absolute'}} alt="Extension" />
                <img src={LandingJames} style={{right: 0, top: '0', width: '30%', position: 'absolute'}} alt="James" />

                { showMission ? (
                    <div className="MissionStatement">
                        <Modal.Dialog>
                            <Modal.Header closeButton>
                                <Modal.Title>Muse's Mission</Modal.Title>
                            </Modal.Header>
            
                            <Modal.Body>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Modal.Body>
            
                            <Modal.Footer>
                                <Button variant="dark" onClick={() => setShowMission(false)}>Close</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </div>
                ) : null}
            </div>
        </>
    )
}

export default Landing;