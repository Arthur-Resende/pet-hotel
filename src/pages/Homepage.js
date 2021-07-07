import React from 'react';
import Landing from '../components/Landing.js';
import Navbar from '../components/Navbar.js';
import '../styles/stylesHomepage.css';

class Home extends React.Component {
    render() {
        return (
            <section className="home">
                <Navbar></Navbar>
                {/* <Landing></Landing> */}
            </section>
        );
    }
}

export default Home;
