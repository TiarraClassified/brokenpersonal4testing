import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

export default class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      poss: {color: "#DECAAF"},
      opacity: false
    }
  }

  handleToggle = () => this.setState({
    open: !this.state.open,
    opacity: !this.state.opacity
    });

  render() {
    return (
      <div>
        <button onClick={this.handleToggle}
          onMouseEnter={(e) => e.target.style.color = '#920404'}
          onMouseLeave={(e) => e.target.style.color = '#DECAAF'}
         style={{position: "fixed", top: "25px", right: "88px", width: "100px", height: "25px", borderRadius: "10px", background: "transparent", border: "none", fontSize: "17px", color: "#DECAAF", outline: "none"}}
        >Navigate</button>
        

        <Drawer containerStyle={{background: "rgba(0,0,0,0.7)", width: '360px'}} style={(this.state.opacity) ? {opacity: '1'} : {opacity: '0'}} open={this.state.open}>

        <a style={{textDecoration: 'none'}}href='/api/login'><MenuItem 
        onMouseEnter={(e) => e.target.style.color = '#920404'}
        onMouseLeave={(e) => e.target.style.color = '#DECAAF'}
        style={{color: "#DECAAF"}}>Sign Up/Log In</MenuItem></a>
        
        <a href='#email' style={{textDecoration: 'none'}}><MenuItem 
        onMouseEnter={(e) => e.target.style.color = '#920404'}
        onMouseLeave={(e) => e.target.style.color = '#DECAAF'}
        style={{color: "#DECAAF"}}>Contact SpaceX</MenuItem></a>

        <Link to='/mars/why' style={{textDecoration: 'none'}}><MenuItem 
        onMouseEnter={(e) => e.target.style.color = '#920404'}
        onMouseLeave={(e) => e.target.style.color = '#DECAAF'}
        style={{color: "#DECAAF"}}>Why Colonize Mars</MenuItem></Link>

        <Link to='/mars/possibility' style={{textDecoration: 'none'}}><MenuItem 
        onMouseEnter={(e) => e.target.style.color = '#920404'}
        onMouseLeave={(e) => e.target.style.color = '#DECAAF'}
        style={{color: "#DECAAF", lineHeight: "none"}}>Colonization Plans and <br/> Upcoming Launches</MenuItem></Link>

        <Link to='/mars/rockets' style={{textDecoration: 'none'}}><MenuItem 
        onMouseEnter={(e) => e.target.style.color = '#920404'}
        onMouseLeave={(e) => e.target.style.color = '#DECAAF'}
        style={{color: "#DECAAF"}}>Costs and Rockets</MenuItem></Link>
        </Drawer>
      </div>
    );
  }
}