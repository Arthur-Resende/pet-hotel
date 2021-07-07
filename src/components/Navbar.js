/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../styles/stylesNavbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarToggle: false
        };
    }

    viewNavbar() {
        this.setState({
            navbarToggle: !this.state.navbarToggle
        });
    };

    render() {
        const navbarToggle = this.state.navbarToggle

        return (
            <div className="navbar">
                <div className="toggle" onClick={() => this.viewNavbar()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={"navItems " + (navbarToggle ? '':'hide')}>
                    <a>início</a>
                    <a>nossos profissionais</a>
                    <a>reviews</a>
                    <a>como usar</a>
                </div>
            </div>
        );
    }
}

export default Navbar;