import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';

export default class Home extends Component {
    render() {
        return(
            <div className='container'>
            <header className="App-header">
                <nav className="navbar">
                    <ul className="navbar-list">
                        <li><Link to={'/'} className="nav-link">rideMyWay</Link></li>
                        <li><Link to={'#'} className="description">TANZANIAN'S RIDE SERVICES APP</Link></li>
                     </ul>
                </nav>
            </header>
            <div className='home'>
                <h2>Ride My Way</h2>
                <p>is an app that provides drivers with the ability to create ride offers and 
                    passengers to join available ride offers.<br/><br/>
                    by clicking the button below you can sign-up as driver or request a ride.
                </p>
                <button className='sign-up'>SIGN UP/REQUEST</button>
            </div>
            </div>
        );
    }
}