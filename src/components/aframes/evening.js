import React, { Component } from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import mars2 from '../../photos/mars2.jpeg';
import {Link} from 'react-router-dom';

export default class Evening extends Component {
  render() {
    return (
      <a-scene>
        <a href="/mars"><div className='backbutton'>Back</div></a>
        <Entity primitive="a-sky" src={mars2}/>
        <Entity primitive='a-box' height="12" width="3" depth="5" color="#333130" position="-120 0 -30" />
        <Entity particle-system={{preset: 'dust', particleCount: 8000, color: '#844c35'}}/>
      </a-scene>
    );
  }
}
