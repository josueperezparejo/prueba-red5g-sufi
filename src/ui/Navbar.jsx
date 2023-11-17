import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { onLogout } from '../slices/user/userSlice';

import logo from '../assets/logoSufi.svg';
import iconLogout from '../assets/iconLogout.svg';

export const Navbar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        localStorage.setItem('auth', JSON.stringify(false))
        dispatch(onLogout())
        navigate('/login', { replace: true })
    }

    return (
        <>
            <nav style={{ height: '90px' }} className='d-flex flex-wrap gap-2 justify-content-center align-items-center mt-3'>
                <div className='flex-fill text-center'>
                    <a href='/' style={{ justifySelf: 'center' }}>
                        <img className='img-fluid' width={'83px'} height={'24px'} src={logo} alt="logo sufi" />
                    </a>
                </div>
                <div>
                    <Link onClick={handleLogout} className='text-decoration-none text-center' style={{ color: '#31323F', fontFamily: 'Open Sans', fontSize: '14px', fontWeight: '700' }}>Cerrar sesión <span className='mx-2'><img src={iconLogout} alt="icon logout" width="24px" /></span></Link>
                </div>
            </nav>

            <hr className='border boredr-3' />
        </>
    )
}
