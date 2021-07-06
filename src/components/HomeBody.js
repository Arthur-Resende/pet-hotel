import React from 'react';

class HomeBody extends React.Component {
    render() {
        return (
            <div className="homeBody">
                <div className="container">
                    <div className="findCaretakers" id="#placeholder">
                        <h1>Encontre cuidadores em sua área</h1>
                        <p>Hospedagem de animais com cuidadores profissionais especializados</p>
                        <input type="text" placeholder="Onde você mora"></input>
                    </div>
                    {/* <div className="doggo">
                        <span id="ball"></span>
                        <img src={dog} alt="dog carrying a stick"></img>
                    </div> */}
                </div>
                <div className="circle"></div>
            </div>
        );
    }
}

export default HomeBody;