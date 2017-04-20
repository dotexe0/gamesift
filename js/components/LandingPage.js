import React, { Component } from 'react';
import {Link, hashHistory} from 'react-router';
// import '../../css/LandingPage.css'

export default class LandingPage extends Component  {
    render() {
        return(
            <div>
                <h1 className="webTitle"/>
                <Link to="/home">Cinefilm</Link>
                <h1>Hello World</h1>
            </div>
            );
    }

};
