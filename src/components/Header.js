import React from 'react'; 
import Navbar from './Navbar';

function Header()
{
    return (  <>
                <header className="header">
                    <nav className="navbar navbar-light bg-light">
                        <div className="container">
                            <Navbar />
                        </div>
                    </nav>
                </header>    
            </>
        );
}
    
export default Header;