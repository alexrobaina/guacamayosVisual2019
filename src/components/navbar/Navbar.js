import React, { Component } from "react";
import logo from '../../assets/logo.png';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './navbar.css';



export default class Navbar extends Component {
    render () {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <dib className="logo">
                        <img src={logo} />
                    </dib>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="justify-center">
                                <div className="navbar-nav">
                                    <Router>
                                <Link className="nav-item nav-link active" href="#">Servicios <span className="sr-only">(current)</span></Link>
                                <Link className="nav-item nav-link" href="#">Nosotros</Link>
                                <Link className="nav-item nav-link" href="#">Portfolio</Link>
                                <Link className="nav-item nav-link" href="#">Video</Link>
                                <Link className="nav-item nav-link" href="#">Contacto</Link>
                                </Router>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}