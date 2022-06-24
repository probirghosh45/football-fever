// import react , { useState } from 'react';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'


const RequiredAuth = () => {
    const user = {'email':false}
    return (
        user.email ? <Outlet/> : <Navigate to='/login'/>
    )

};

export default RequiredAuth;

