import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { onLogin } from '../../slices/user/userSlice';

import logo from '../../assets/logoSufi.svg';
import background from '../../assets/background.png';
import { Spinner } from '../../ui/Spinner';

export const LoginPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [userInput, setUserInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [alert, setAlert] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleLogin = (event) => {
        event.preventDefault()

        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            if (userInput != 'admin' || userInput == '' || passwordInput.length <= 5 || passwordInput == '') {
                setAlert(true)
                setTimeout(() => {
                    setAlert(false)
                }, 2000);
                return
            } else {
                localStorage.setItem('auth', JSON.stringify(true))
                dispatch(onLogin())
                navigate('/home', { replace: true })
            }
        }, 2000);
    }

    return (
        <div className='d-flex min-vh-100 justify-content-center align-items-center'
            style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>

            <form className='p-3 text-center'
                style={{
                    width: '400px',
                    height: ' 476px'
                }}>

                <div className='text-center' width='400px' height='476px'>
                    <img className='img-fluid mb-2' src={logo} alt="logo sufi" />
                    <h1 style={{ fontFamily: 'Open Sans', fontWeight: '700' }}>Sufipay</h1>
                    <p style={{ fontFamily: 'Open Sans', fontWeight: '400' }}>Administrador comercial</p>
                </div>

                <div className='text-center p-4 mb-3'
                    style={{
                        background: '#FFFFFF 0% 0% no-repeat padding-box',
                        boxShadow: '0px 0px 16px #00000029',
                        borderRadius: '12px'
                    }}>
                    <div className="form-floating w-100 mb-2">
                        <input value={userInput} onChange={(event) => setUserInput(event.target.value)} className="form-control" id="floatingInput" name='user' type="email" placeholder="name@example.com" />
                        <label htmlFor="floatingInput" style={{ color: '#ABB9C7' }}>Usuario</label>
                    </div>
                    <div className="form-floating w-100">
                        <input value={passwordInput} onChange={(event) => setPasswordInput(event.target.value)} className="form-control" name='password' type="password" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword" style={{ color: '#ABB9C7' }}>Contraseña</label>
                    </div>
                </div>

                {(alert) && <p className='alert alert-danger'>El usuario o contraseña están equivocados, intentalo nuevamente.</p>}

                {(loading) && <Spinner />}

                <button onClick={handleLogin} disabled={loading || alert} className={`rounded-pill btn text-white w-50 mb-2 py-2`}
                    style={{
                        backgroundColor: '#DD3542',
                        border: 'none',
                        fontFamily: 'Open Sans',
                        fontSize: '16px',
                        fontWeight: '700'
                    }}>INGRESAR</button>

                <div>
                    <Link style={{ textDecoration: 'none', color: '#413E4D', fontFamily: 'Open Sans', fontSize: '12px' }} to={'https://red5g.co/'}>No recuerdo mi contraseña</Link>
                </div>
            </form>
        </div>
    )
}
