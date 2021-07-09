import React from 'react';

import {ReactComponent as Star} from '../assets/star.svg';
import {ReactComponent as LeftArrow} from '../assets/leftArrow.svg';
import {ReactComponent as RightArrow} from '../assets/rightArrow.svg';

import '../styles/stylesReview.css';

class Review extends React.Component {
    render() {
        return(
            <section className="reviews">
                <LeftArrow className="arrow l"></LeftArrow>

                <div className="avaliação">
                    <h1>O que pensam nossos clientes</h1>

                    <img
                        className="profilePicture"
                        src="https://uifaces.co/our-content/donated/bUkmHPKs.jpg"
                        alt="Review">
                    </img>

                    <h2>Fernando Ferraz</h2>

                    <div className="rating">
                        <Star className="star"></Star>
                        <Star className="star"></Star>
                        <Star className="star"></Star>
                        <Star className="star"></Star>
                        <Star className="star"></Star>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Phasellus convallis, mi sit amet molestie ullamcorper, ex ex 
                    molestie enim, id lacinia nisl diam eget quam. Praesent eros 
                    dolor, dictum sit amet pretium eu, sollicitudin ac turpis. 
                    Sed mollis facilisis nisi, id tincidunt ligula consectetur a.
                    </p>
                </div>

                <RightArrow className="arrow r"></RightArrow>
            </section>
        );
    }

}

export default Review;