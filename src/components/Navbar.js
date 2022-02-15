import React from 'react'; 
import { Link } from 'react-router-dom'; //NavLink

function Navbar()
{
    return (
        <>
            <Link className="navbar-brand" exact  to="/"><img src={`${process.env.PUBLIC_URL}/images/logo.png`} className="img-fluid" alt="Brand Logo" /></Link>
            
        </>
    );

}
export default Navbar;