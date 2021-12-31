import React from 'react';
import './Navbar.css'

const Navbar = () => {

    return (
        <header>
            <nav>
                <ul>
                    <li>Shuffle images</li>
                </ul>
            </nav>
        </header>
    )
}

//use withRouter() when you can't use the Route component
export default Navbar;