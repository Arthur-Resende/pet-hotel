import React from 'react';

import Landing from '../components/Landing.js';
import Navbar from '../components/Navbar.js';
import TimeProfissionais from '../components/Time';

import '../styles/stylesHomepage.css';

class Home extends React.Component {
    render() {
        return (
            <section className="home">
                <Navbar></Navbar>
                <Landing></Landing>
                <TimeProfissionais></TimeProfissionais>
            </section>
        );
    }
}

export default Home;
