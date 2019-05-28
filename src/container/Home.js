import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import '../Home.css';

const contentStyle = {
    maxWidth: '600px',
    width: '90%'
}
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
                <Popup trigger = {<button className='button'>SIGN-UP/CREATE REQUEST</button>}
                    modal
                    contentStyle = { contentStyle }
                >
                    { close => (
                        <div className='modal'>
                            <a className='close' onClick={ close }>
                                &times;
                            </a>
                            <div className='header'>First Time User?</div>
                            <div className='content'>
                                {' '}
                                <div>
                                    want to join our amazing drivers' team?
                                    <button className='button'>SIGN UP HERE</button>
                                </div>
                                <div>
                                    to see available ride offer or make a request please
                                    <button className='button'>CREATE ONE TIME PROFILE</button>
                                </div>
                                
                            </div>
                        </div>
                    )}
                </Popup>

            </div>
            </div>
        );
    }
}