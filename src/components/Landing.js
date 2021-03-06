import React from 'react';
import '../styles/stylesLanding.css';

class Landing extends React.Component {
    render() {
        return (
            <div id="homeBody">
                <div className="container">
                    <div className="findCaretakers" id="#placeholder">
                        <h1>Encontre cuidadores em sua área</h1>
                        <p>Hospedagem de animais com cuidadores profissionais especializados</p>
                        <input type="text" placeholder="Onde você mora"></input>
                    </div>
                </div>
                <div id="backgroundSquare"></div>
                <div id="backgroundSquare1"></div>
            </div>
        );
    }
}

export default Landing;