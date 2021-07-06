import React from 'react';
import dog from '../assets/dog.png'

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <ul>
                <li>início</li>
                <li>nossos profissionais</li>
                <li>reviews</li>
                <li>como usar</li>
                </ul>
            </div>
        );
    }
}

class HomeBody extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="findCaretakers">
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
