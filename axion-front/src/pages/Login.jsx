import logo from '../assets/logo.png';
import lock from '../assets/lock.png';
import mail from '../assets/mail.png';
import bgImage from '../assets/bg.jpg';

import "./Login.css"

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Login(){

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = () => {
        
    }

    return(
        <div className='main-container'>
            <div className="login-container">
                <div className="form-container">
                    <img className="logo-form" src={logo} alt="Orange Logo" />
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label className='input-label' htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                placeholder='seunome@email.com'
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                className='input'
                            />
                            <div className="input-icon">
                                <img src={mail} alt="Email Icon" />
                            </div>
                        </div>
                        <div className="input-container">
                            <label className='input-label' htmlFor="password">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder='Password'
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}                            className='input'
                            />
                            <div className="input-icon">
                                <img src={lock} alt="Password Icon" />
                            </div>
                        </div>
                        <div className='checkbox-container'>
                            <input
                                className='checkbox'
                                type="checkbox"
                                id="showPassword"
                                onChange={() => setShowPassword(!showPassword)}
                            ></input>
                            <label className='checkbox-label' htmlFor="showPassword">Mostrar Senha</label>
                        </div>
                    
                        <p className='problems'>Problemas para acessar sua conta?</p>
                        <button
                            type='submit'
                            className='login-btn'
                        >
                        Acessar</button>
                    </form>
                    <div className='line'><span className='line-content'>ou</span></div>
                    <button
                        type='button'
                        className='register-btn'
                    >
                    Cadastrar</button>
                    <div className="terms">
                        <a href='#'>Termo de Uso</a>
                        <span>•</span>
                        <a href='#'>Política de privacidade</a>
                    </div>
                </div>
            </div>

            <div 
                className="container"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>
        </div>
    )
}