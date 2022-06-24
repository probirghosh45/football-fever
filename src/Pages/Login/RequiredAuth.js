import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const RequiredAuth = () => {
    // const user = {'email' : true};
    const [user] = useState(false)
    return (
        // user.email ? <Outlet/> : <Navigate to="/login" />
        user ? <Outlet/> : <Navigate to="/login" />
    )

};

export default RequiredAuth;