import React from 'react';
import '../styles/stylesTime.css';

class TimeProfissionais extends React.Component {
    render() {
        return(
            <div className="timeProfissionais">
                <div className="cardsProfissionais">
                    <div className="profissional">
                        <img
                            src="https://uifaces.co/our-content/donated/gPZwCbdS.jpg"
                            alt="Professional member of the team"
                        ></img>
                        <div className="description">
                            <h2>nome sobrenome</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aenean varius leo in sodales faucibus. Vestibulum consequat
                            sit amet nisi ultrices tempor.</p>
                        </div>
                    </div>

                    <div className="profissional">
                        <img 
                            src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                            alt="Professional member of the team"></img>
                        <div className="description">
                            <h2>nome sobrenome</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aenean varius leo in sodales faucibus. Vestibulum consequat
                            sit amet nisi ultrices tempor.</p>
                        </div>
                    </div>

                    <div className="profissional">
                        <img
                            src="https://uifaces.co/our-content/donated/3799Ffxy.jpeg"
                            alt="Professional member of the team"
                        ></img>
                        <div className="description">
                            <h2>nome sobrenome</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aenean varius leo in sodales faucibus. Vestibulum consequat
                            sit amet nisi ultrices tempor.</p>
                        </div>
                    </div>
                </div>
                <div className="texto">
                    <h1>Conheça nosso time de profissionais</h1>
                    <p>Contamos com um time de profissionais especializados e 
                    certificados para garantir a melhor qualidade de hospedagem 
                    para seu bichinho.</p>
                    <button>Entre em contato!</button>
                </div>
            </div>
        );
    }
}

export default TimeProfissionais;