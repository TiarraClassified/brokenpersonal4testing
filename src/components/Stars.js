import React, {Component} from 'react';
import './stars.css';
import {Link} from "react-router-dom";

export default class Stars extends Component{
    constructor(){
        super()

        this.state={
            transition1: {},
            transition2: {},
            transition3: {}
        }

    }

    componentDidMount(){
        window.addEventListener('scroll', function(e){
            e.preventDefault;
        })
    }

    componentWillUnmount(){
        window.addEventListener('scroll', function(e){
            e.preventDefault;
        })
    }

    render(){
        return(
            <section>
            
            <div className='stars'>
                <div className='destination'>...destination Mars</div>
                <Link to='/mars'><div className='mars' style={this.state.transition1}></div></Link>
                <div className='deathstar' style={this.state.transition2} ></div>
                <div className='asteroid1' style={this.state.transition3}></div>
                <div className='asteroid2' style={this.state.transition3}></div>
            </div>
            </section>
        )
    }
}