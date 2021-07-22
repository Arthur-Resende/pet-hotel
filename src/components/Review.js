import React from 'react';

import {ReactComponent as Star} from '../assets/star.svg';

import '../styles/stylesReview.css';

class Review extends React.Component {
    debugReview() {
        return (
        <div id="avaliação">
            <div className="profile">
                <img
                    className="profilePicture"
                    src="https://uifaces.co/our-content/donated/bUkmHPKs.jpg"
                    alt="Review">
                </img>
                <div className="user">
                    <h2>Fernando Ferraz</h2>

                    <div className="rating">
                        <Star className="star"></Star>
                        <Star className="star"></Star>
                        <Star className="star"></Star>
                        <Star className="star"></Star>
                        <Star className="star"></Star>
                    </div>
                </div>
            </div>

            <div className="text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus convallis, mi sit amet molestie ullamcorper, ex ex 
                molestie enim, id lacinia nisl diam eget quam. Praesent eros 
                dolor, dictum sit amet pretium eu, sollicitudin ac turpis.
                </p>
            </div>
        </div>)
    }

    render() {

        return(
            <section className="reviews">
                {this.debugReview()}
                {this.debugReview()}
                {this.debugReview()}
                {this.debugReview()}
            </section>
        );
    }

}

export default Review;