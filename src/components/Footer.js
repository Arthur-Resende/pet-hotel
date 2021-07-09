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
                    <h2>Arthur Resende Faria</h2>
                    <Github></Github>
                    <Linkedin></Linkedin>
                </div>

                <div className="contactForm">
                    <form method="post">
                        <input type="text" placeholder="Nome"></input>
                        <input type="text" placeholder="Sobrenome"></input>
                        <input type="text" placeholder="Email"></input>
                        <input type="text" placeholder="Assunto"></input>
                        <input type="text" placeholder="Mensagem"></input>
                    </form>
                </div>
            </section>
        );
    }
}

export default Footer;
