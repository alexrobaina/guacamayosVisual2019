import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Carrousel from '../../components/carrousel/Carrousel';
import Servicios from '../../components/servicios/Servicios';



export default class Home extends Component {
    render () {
        return (
            <div>

                <Navbar />

                <Carrousel />

                <Servicios />

            </div>
        );
    }
}
