import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages'
import { SufiRoutes } from '../sufi/routes/SufiRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='login' element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>} />

        <Route path='/*' element={
          <PrivateRoute>
            <SufiRoutes />
          </PrivateRoute>} />
      </Routes>
    </>
  )
}
