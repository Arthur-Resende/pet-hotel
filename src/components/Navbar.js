import React from 'react';
import '../styles/stylesNavbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <ul className="navItems">
                    <li>início</li>
                    <li>nossos profissionais</li>
                    <li>reviews</li>
                    <li>como usar</li>
                </ul>
            </div>
        );
    }
}

export default Navbar;