import React from "react";
import { Link } from 'react-router-dom';

function Signup() {
    return (

        <>
        <h1> sign up page</h1>
        <span>
            Already have an account?
            <Link to = "/login"> Log In</Link>
        </span>
        <br />
        <span> Go Back <Link to = "/">home</Link>
         </span>
        </>
    );
}

export default Signup;