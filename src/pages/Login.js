import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (

            <>
            <h1> Login page</h1>
            <span>
                Dont have an account?
                <Link to = "/Signup"> Sign up</Link>
            </span>
            <br />
            <span> Go back<Link to = "/">home</Link>
             </span>
            </>
        );
    }
    
    


export default Login;