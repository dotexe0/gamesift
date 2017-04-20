import React, { Component } from 'react';
import {Link, hashHistory} from 'react-router';
// import backgroundImage from '../../assets/bgImg.jpg';
export default class LandingPage extends Component  {

    componentWillMount() {
        document.body.style.background = 'url(../../assets/bgImg.jpg)';
        document.body.style.opacity = '0.7';
    }

    componentWillUnmount() {
        document.body.style.background = null;
        document.body.style.opacity = null;
    }
    render() {
        const landingTitle = {
            color: 'black',
            marginTop: '150px',
            fontFamily: 'Orbitron',
            display: 'block',
            letterSpacing: '10px'
        }

        const styledDiv = {
            root: {
                background: 'url(../../assets/bgImg.jpg)',
                backgroundSize: 'cover',
                overflow: 'hidden'
            },
            color: 'red'
        }
        return(
            <div style={styledDiv}>
                <h1><Link to="/home" style={landingTitle}>Gamesift</Link></h1>
                <h1>A video game synopsis search engine.</h1>
            </div>
            );
    }

};
