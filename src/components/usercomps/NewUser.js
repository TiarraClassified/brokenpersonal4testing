import React, { Component } from 'react';
import './newuser.css';
import {Link} from 'react-router-dom';

export default class NewUser extends Component{
    render(){
        return(
            <section className='newuser'>
            <div className='start'>
            <p>
            Click Survey to Begin
            </p>
            <Link to='/survey'><button id='start'>Survey</button></Link>
            </div>
            </section>
        )
    }
}










