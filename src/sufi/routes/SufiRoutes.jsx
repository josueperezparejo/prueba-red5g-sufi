import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { HomePage } from '../pages/HomePage';

export const SufiRoutes = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path='home' element={<HomePage />} />
                <Route path='/*' element={<Navigate to={'/login'} />} />
            </Routes>
        </>
    )
}
