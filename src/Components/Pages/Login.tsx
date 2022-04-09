import '../../Static/Styles/Login.css'
import React from 'react';
import { Button } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const registerHandler = () => {
        // Do ya thing adam
    }

    const LoginHandler = () => {
        // Do ya thing adam
    }

    return (
        <>
            <div className='Login'>
                <div className='Split LeftLanding'>
                    <h1 className="header" style={{marginTop: "40%"}}>MusePay</h1>
                    <p style={{color: "white"}}>Before you start sending and receiving<br />hashes, let us get to know you.</p>
                    <Button variant="light" onClick={() => registerHandler()}>Join Us! 👋</Button>
                    <br />
                    <Button variant="light" style={{marginTop: "5px"}} onClick={() => registerHandler()}>Login</Button>
                </div>
            </div>
            
            <div className='Login'>
                <div className='Split RightLanding'>
                    <div></div>
                </div>
            </div>
        </>
    );
}

export default Login;

export var user = {}