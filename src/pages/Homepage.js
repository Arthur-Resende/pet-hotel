import React from 'react';
import dog from '../assets/dog.png';
import './homepage.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <ul className="navItems">
                    <a href="#placeholder"><li>início</li></a>
                    <a href="#placeholder"><li>nossos profissionais</li></a>
                    <a href="#placeholder"><li>reviews</li></a>
                    <a href="#placeholder"><li>como usar</li></a>
                </ul>
            </div>
        );
    }
}

class HomeBody extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="findCaretakers" id="#placeholder">
                    <h1>Encontre cuidadores em sua área</h1>
                    <p>Hospedagem de animais com cuidadores profissionais especializados</p>
                    <input type="text" placeholder="Onde você mora"></input>
                </div>

                <div className="doggo">
                    <img src={dog} alt="dog carrying a stick"></img>
                </div>
            </div>
        );
    }
}

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Navbar></Navbar>
                <HomeBody></HomeBody>
            </div>
        );
    }
}

export default Home;
