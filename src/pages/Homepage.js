import React from 'react';

import Landing from '../components/Landing.js';
import Navbar from '../components/Navbar.js';
import TimeProfissionais from '../components/Time.js';
import Review from '../components/Review.js'

import '../styles/stylesHomepage.css';

class Home extends React.Component {
    render() {
        return (
            <section className="home">
                <Navbar></Navbar>
                <Landing></Landing>
                <div className="whiteBackground">
                    <TimeProfissionais></TimeProfissionais>
                    <Review></Review>
                </div>
            </section>
        );
    }
}

export default Home;
