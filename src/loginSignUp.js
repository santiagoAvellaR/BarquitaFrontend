import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './loginSignUp.css';
import user_icon from './Assets/person.png'
import email_icon from './Assets/email.png'
import password_icon from './Assets/password.png'

const LoginSignUp = ()  => {

    const [action, setAction] = useState("Sign Up");
    const [submit, setSubmit] = useState("Crear Cuenta");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const selectLoginAction = () => {
        setAction("Login");
        setSubmit("Iniciar Sesión");
    }

    const selectSignUpAction = ()  => {
        setAction("Sign Up");
        setSubmit("Crear Cuenta");
    }

    const submitLoginInfo = ()  => {
        console.log("Login info:", { email, password });
        navigate('/tasks');
    }

    const submitSignUpInfo = ()   => {
        console.log("Sign Up info:", { name, email, password });
        navigate('/tasks');
    }

    return (
        <div className="container">
            <div className='buttons-container'>
                <div className={action === "Login" ? "button gray" : "button"} onClick={()=>{selectSignUpAction()}}>Sign  Up</div>
                <div className={action === "Sign Up" ? "button gray" : "button"}  onClick={()=>{selectLoginAction()}}>Login</div>
            </div>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underLine'></div>
            </div>
            <div className='inputs'>
                {action === "Login" ? <div></div> : 
                <div className='input'>
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="Nombre" value={name}  onChange={(e)=>{setName(e.target.value)}}/>

                </div>}
                <div className='input'>
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='input'>
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            {action === "Sign Up" ? <div></div> : <div className='forgot-password'>Olvidó la Contraseña? <span>Clickee Aquí</span></div>}
            {submit === "Iniciar Sesión" && action === "Login" ? <div className='submit-button' onClick={()=>{submitLoginInfo()}}>{submit}</div> : 
            <div className='submit-button' onClick={()=>{submitSignUpInfo()}}>{submit}</div>}
        </div>
    )
}

export default LoginSignUp;