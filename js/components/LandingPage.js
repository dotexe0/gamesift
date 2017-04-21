import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
// import backgroundImage from '../../assets/bgImg.jpg';
export default class LandingPage extends Component  {

    render() {
        const landingTitle = {
            color: '#ce9697',
            fontFamily: 'Orbitron sansSerif',
            letterSpacing: '10px',
            zIndex: 1,
            fontSize: '50px',
            background: '#f9f9f9'
        }

        const styledDiv = {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            height: '100vh',
            width: '100%',
            background: 'url(../../assets/bgImg.jpg) no-repeat center center fixed',
            backgroundSize: 'cover',
            flexDirection: 'column'
        }

        const container = {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.9
        };

        const h1Styling = {
            marginTop: '30px',
            marginBottom: '30px',   
            zIndex: 1,
            background: '#f9f9f9'
        }

        const landingButton = {
            background: '#f9f9f9',
            fontSize: '16px',
            marginTop: '10px',
            borderStyle: 'none',
            borderStyle: 'none',
            padding: '5px 20px',
            cursor: 'pointer',
            zIndex: 1
        }
        
        return(
                <div className="landing" style={styledDiv}>
                    <div style={container}/>
                    <Link to="/home" style={landingTitle}><h1>Gamesift</h1></Link>
                    <p style={h1Styling}>
                        A video game synopsis search engine. <br />
                        Find out what games you've been missing out on.
                    </p>
                    <Link to="/home" className="landingButton" style={landingButton}>Enter</Link>
                </div>
            );
    }

};
