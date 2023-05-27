import React from 'react'
import { Navbar } from '../../ui'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'

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
