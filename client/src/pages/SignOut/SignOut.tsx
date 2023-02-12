import React, { useEffect } from 'react';
import Register from '../Register/Register';

const SignOut = () => {
    useEffect(() => {
        localStorage.clear();
    }, []);

    return (
        <Register />
    );
};

export default SignOut;