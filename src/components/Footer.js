import React from 'react';

import Arthur from '../assets/arthur.jpeg';
import {ReactComponent as Github} from '../assets/github.svg';
import {ReactComponent as Linkedin} from '../assets/linkedin.svg';

import '../styles/stylesFooter.css';

class Footer extends React.Component {
    render() {
        return (
            <section className="footer">
                <div className="creator">
                    <img src={Arthur} alt="Criador do site, Arthur Resende Faria"></img>
                    <h3>Arthur Resende Faria</h3>
                    <Github className="socialIcons"></Github>
                    <Linkedin className="socialIcons"></Linkedin>
                </div>

                <div className="contactForm">
                    <form method="post">
                        <div className="name">
                            <input type="text" placeholder="Sobrenome"></input>
                            <input type="text" placeholder="Nome"></input>
                        </div>
                        <input type="text" placeholder="Email"></input>
                        <input type="text" placeholder="Assunto"></input>
                        <input type="text" placeholder="Mensagem" className="mensagem"></input>
                    </form>
                </div>
            </section>
        );
    }
}

export default Footer;
