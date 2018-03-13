import React, { Component } from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import adobe from '../../photos/adobemars.jpeg';
import {Link} from 'react-router-dom';

export default class Day extends Component {
  render() {
    return (
      <a-scene>
      <a href="/mars"><div className='backbutton'>Back</div></a>href       <Entity primitive="a-sky" src={adobe}/>
        <Entity particle-system={{preset: 'dust', particleCount: 8000, color: '#844c35'}}/>
      </a-scene>
    );
  }
}
