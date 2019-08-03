import React, { Component } from 'react';

// Image of carrousel
// import icons1 from '../../assets/icons/icon-01.jpg';
// import icons2 from '../../assets/icons/icon-02.jpg';
// import icons3 from '../../assets/icons/icon-02.jpg';
// import icons4 from '../../assets/icons/icon-03.jpg';
// import icons5 from '../../assets/icons/icon-04.jpg';

// style CSS
import './servicios.css';

const services = [

    {
    //   image: icon1,
      alt: 'Guacamayos Visual',
      title: 'FOTOGRAFÍA',
      text: 'Hacemos fotoperiodismo, casual y espontáneo. Nos encanta capturar momentos sin que se sientan invadidos o se vean obligados a posar.'
    },
    {
    //   image: icon2,
      alt: 'Guacamayos Visual',
      title: 'VIDEO',
      text: 'Elaboramos un video con los mejores momentos o “highlights” de la boda para que puedan compartir en las redes sociales; o bien un video de mayor duración.'
    },
    {
    //   image: icon3,
      alt: 'Guacamayos Visual',
      title: 'Sesión PreCasamiento',
      text: 'Es una sesión de fotos previa al casamiento, donde generamos la oportunidad de entrar en confianza con los fotografos, estas fotos se pueden usar para crear invitaciones y regalos.'
    },
    {
    //   image: icon4,
      alt: 'Guacamayos Visual',
      title: 'REVELADO DIGITAL',
      text: ''
    },
    {
    //   image: icon5,
      alt: 'Guacamayos Visual',
      title: 'PÁGINA WEB | INVITACIONES',
      text: ''
    },
    {
    //   image: icon5,
      alt: 'Guacamayos Visual',
      title: 'TRAVEL',
      text: ''
    }
];

export default class Servicios extends Component {
    render () {
        return (
            <div>
                <div className="container">
                    <div className="row">
        {
                services.map((serv) => {
                        return (
                            <div className="col-xs-12 col-md-4">
                                <div className="card">
                                    {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                                <div className="card-body">
                                <h5 className="card-title">{serv.title}</h5>
                                <p className="card-text">{serv.text}</p>
                                <a href="#" className="btn btn-primary">Info</a>
                                </div>
                            </div>
                            </div>
                )                  
            })
        }
                    </div>
                </div>
            </div>
        )
    }
}