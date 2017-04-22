import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
export default class LandingPage extends Component  {

    render() {
        const landingTitle = {
            color: 'black',
            fontFamily: 'Orbitron, sans-serif',
            letterSpacing: '10px',
            zIndex: 1,
            fontSize: '50px',
            backgroundColor: '#f9f9f9',
            borderRadius: '5px',
            paddingTop: '11px',
            paddingLeft: '5px',
            paddingRight: '5px'
        }

        const styledDiv = {
            display: 'flex',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            height: '100vh',
            width: '100%',
            background: 'url(../../assets/bgImg2.jpg) no-repeat center center fixed',
            backgroundSize: 'cover',
            flexDirection: 'column'
        }

        const container = {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(192,192,192,0.6)'
        };

        const pStyling = {
            marginTop: '30px',
            marginBottom: '30px',   
            zIndex: 1,
            background: '#f9f9f9',
            borderRadius: '5px',
            padding: '15px',
            fontFamily: 'Montserrat, sans-serif'
        }

        const landingButton = {
            background: '#f9f9f9',
            fontSize: '16px',
            fontFamily: 'Montserrat, sans-serif',
            marginTop: '10px',
            borderStyle: 'none',
            borderRadius: '5px',
            padding: '10px 20px',
            cursor: 'pointer',
            zIndex: 1,
            letterSpacing: '1px'
        }
        
        return(
                <div className="landing" style={styledDiv}>
                    <div style={container}/>
                    <Link to="/home"><h1 style={landingTitle}>Gamesift</h1></Link>
                    <p style={pStyling}>
                        A video game synopsis search engine. <br />
                        Find out what games you've been missing out on.
                    </p>
                    <Link to="/home" className="landingButton" style={landingButton}>Get started</Link>
                </div>
            );
    }

};
