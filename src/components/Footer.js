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
                    <a
                        href="https://github.com/Arthur-Resende/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Github className="socialIcons"></Github>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/arthur-resende-8ab1431b4"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Linkedin className="socialIcons"></Linkedin>
                    </a>
                </div>
            </section>
        );
    }
}

export default Footer;
