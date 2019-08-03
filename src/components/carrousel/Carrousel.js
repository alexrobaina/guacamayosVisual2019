import React, { Component } from 'react';

// Image of carrousel
import carousel1 from '../../assets/carousel/carousel-00001.jpg';
import carousel2 from '../../assets/carousel/carousel-00002.jpg';
import carousel3 from '../../assets/carousel/carousel-00005.jpg';
import carousel4 from '../../assets/carousel/carousel-00008.jpg';
import carousel5 from '../../assets/carousel/carousel-00012.jpg';

// style CSS
import './carrousel.css';

const imageCarrousel = [

    {
      image: carousel2,
      alt: 'Casamiento en Buenos Aires de GuacamayosVisual'
    },
    {
      image: carousel3,
      alt: 'Casamiento en Buenos Aires de GuacamayosVisual'
    },
    {
      image: carousel4,
      alt: 'Casamiento en Buenos Aires de GuacamayosVisual'
    },
    {
      image: carousel5,
      alt: 'Casamiento en Buenos Aires de GuacamayosVisual'
    }
];

export default class Carrousel extends Component {
    render () {
        return (
            <div>

                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={carousel1} alt="Casamiento en Buenos Aires de GuacamayosVisual" />
                        </div>

        {
                imageCarrousel.map((carousel) => {
                        return (
                    <div className="carousel-item">
                        <img className="d-block w-100" src={carousel.image} alt={carousel.alt} />
                    </div>
                )                  
            })
        }


                    </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>

            </div>
        )
    }
}