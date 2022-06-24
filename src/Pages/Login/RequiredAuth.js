import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const RequiredAuth = () => {
    const user = {'email' : true};
    // const [user] = useState(true)
    return (
        user.email ? <Outlet/> : <Navigate to="/login" />
        // user ? <Outlet/> : <Navigate to="/login" />
    )

};

export default RequiredAuth;