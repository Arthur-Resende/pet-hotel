import React from 'react';
import HomeBody from '../components/HomeBody.js'
import Navbar from '../components/Navbar.js'
import './homepage.css';

class Home extends React.Component {
    render() {
        return (
            <section className="home">
                <Navbar></Navbar>
                <HomeBody></HomeBody>
            </section>
        );
    }
}

export default Home;
