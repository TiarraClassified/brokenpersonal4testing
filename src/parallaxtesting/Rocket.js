import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.js';
import flame from '../photos/flame.gif';

export default class Rocket extends Component {
  constructor(){
    super()

    this.state = {
      sequence : false,
      state1 : {},
      num: -150,
      transitionStyle: {},
      flame: {opacity: 0},
      fade: false
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

componentDidMount() {
  document.getElementById('solar').click();
  window.addEventListener('scroll', this.handleScroll);

  setTimeout(()=>{
  this.setState({
    fade: true
  })}, 1000
  )
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll(event){
  console.log('scroll even triggered');
  this.setState({
    fade: false
  });

  let scrollTop = window.scrollY
      ,itemTranslate1 = Math.floor(scrollTop/1.1)
      ,itemTranslate2 = Math.floor(scrollTop/2)
      ,itemTranslate3 = Math.floor(scrollTop/1.1)

  if (window.scrollY < 744){
    this.setState({
      style2: {transform: `translateY(${itemTranslate2}px)`},
      style3: {transform: `translateY(${itemTranslate3}px)`}
    });
  }
//trunk
  else if (window.scrollY < 970 && window.scrollY > 744){
    this.setState({
      state1: {top: `${itemTranslate1 + 311}px`,
              backgroundPosition : `-65px -20px`}
    })
  }
//solar sequence
  else if (window.scrollY > 970){

    switch(true){
    //2
      case window.scrollY<1000:
      this.setState({
          state1: {top: `${itemTranslate1 + 311}px`,
                  backgroundPosition : `-1088px -20px`}
          });
        break;
      //3
      case window.scrollY<1005:
      this.setState({
          state1: {top: `${itemTranslate1 + 311}px`,
                backgroundPosition : `-2111px -20px`}
          });
        break;
      //4    
      case window.scrollY<1010:
        this.setState({
          state1: {top: `${itemTranslate1 + 311}px`,
                backgroundPosition : `-3134px -20px`}
          });
        break;
      //5 
      case window.scrollY<1015:
      this.setState({
        state1: {top: `${itemTranslate1 + 311}px`,
              backgroundPosition : `-4157px -20px`}
        });
      break;
      //6
      case window.scrollY<1020:
      this.setState({
        state1: {top: `${itemTranslate1 + 311}px`,
              backgroundPosition : `-5180px -20px`}
        });
      break;
      //7
      case window.scrollY<1025:
      this.setState({
        state1: {top: `${itemTranslate1 + 311}px`,
              backgroundPosition : `-6203px -20px`}
        });
      break;
      //8
      case window.scrollY<1030:
      this.setState({
        state1: {top: `${itemTranslate1 + 311}px`,
              backgroundPosition : `-7226px -20px`}
        });
      break;
      //9
      case window.scrollY<1035:
      this.setState({
        state1: {top: `${itemTranslate1 + 311}px`,
              backgroundPosition : `-8249px -20px`}
        });
      break;
      //10
      case window.scrollY<1040:
      this.setState({
          state1: {top: `${itemTranslate1 + 311}px`,
                  backgroundPosition : `-9282px -20px`}
          });
        break;
      //11
      case window.scrollY<1045:
      this.setState({
          state1: {top: `${itemTranslate1 + 311}px`,
                backgroundPosition : `-10305px -20px`}
          });
        break;
      //12    
      case window.scrollY<1050:
        this.setState({
          state1: {top: `${itemTranslate1 + 311}px`,
                backgroundPosition : `-11328px -20px`}
          });
        break;
      //13
        case window.scrollY<1055:
        this.setState({
          state1: {top: `${itemTranslate1 + 311}px`,
                backgroundPosition : `-12351px -20px`}
          });
        break;
      //14
        case window.scrollY<1060:
        this.setState({
          state1: {top: `${itemTranslate1 + 311}px`,
                backgroundPosition : `-13374px -20px`}
          });
        break;
      //15
        case window.scrollY<1065:
        this.setState({
          state1: {top: `${itemTranslate1 + 311}px`,
                backgroundPosition : `-14397px -20px`}
          });
        break;
      //16
        case window.scrollY<1070:
        this.setState({
          state1: {top: `${itemTranslate1 + 311}px`,
                backgroundPosition : `-15420px -20px`}
          });
        break;
      //17
        case window.scrollY<1075:
        this.setState({
          state1: {top: `${itemTranslate1 + 311}px`,
                backgroundPosition : `-16443px -20px`}
          });
        break;
      //18
      case window.scrollY<1080:
      this.setState({
        state1: {top: `${itemTranslate1 + 311}px`,
              backgroundPosition : `-17466px -20px`}
        });
      break;
      //19
      case window.scrollY<1085:
      this.setState({
        state1: {top: `${itemTranslate1 + 311}px`,
              backgroundPosition : `-18489px -20px`}
        });
      break;
      //20
      case window.scrollY<1090:
      this.setState({
        state1: {top: `${itemTranslate1 + 311}px`,
              backgroundPosition : `-19512px -20px`}
        });
      break;
      //21
      case window.scrollY<1095:
      this.setState({
        state1: {top: `${itemTranslate1 + 311}px`,
              backgroundPosition : `-20535px -20px`}
        });
      break;
      //22
      case window.scrollY<1100:
      this.setState({
        state1: {top: `${itemTranslate1 + 311}px`,
              backgroundPosition : `-21558px -20px`}
        });
      break;
      //23
      case window.scrollY<1105:
      this.setState({
        state1: {top: `${itemTranslate1 + 311}px`,
              backgroundPosition : `-22581px -20px`}
        });
      break;
      //24
      case window.scrollY<1110:
      this.setState({
        state1: {top: `${itemTranslate1 + 311}px`,
              backgroundPosition : `-23604px -20px`}
        });
      break;
      //25
      case window.scrollY<1115:
      this.setState({
        state1: {top: `${itemTranslate1 + 311}px`,
              backgroundPosition : `-24627px -20px`}
        });
      break;
      //26
      case window.scrollY>1120:
      this.setState({
        state1: {top: `${itemTranslate1 + 311}px`,
              backgroundPosition : `-25650px -20px`}
        });
      break;
      }
  }
// for rocket launch and transition
  if (window.scrollY === 0){ 
    setTimeout(
    ()=>{  
    this.setState({ transitionStyle : styles.pageTransition, flame : {opacity : 1}
    })}, 500
  )
  setTimeout(
    ()=>{
      this.props.history.push('/stars')
    }, 3500
  )
  }
}

  render(){
    // console.log(this.state.fade, this.state.fade2);
      return(
        <div className="rocketcontainer">

          <div style={this.state.transitionStyle}>

            <div id='nosecone'></div>

            <div style={this.state.style2} id='spacecraft'></div>

            <div style={this.state.style3} id='trunk'></div>

            <img className='flame' src={flame} style={this.state.flame}/>

            <div style={window.scrollY > 744 ? { ...this.state.state1, opacity : 1} : { opacity: 0 }} id='solarpanels'>


                <div className='words' style={(this.state.fade) ? {opacity: '1', transform: "translateY(0)", filter: 'blur(0)'}: {opacity: '0'}}>Welcome</div> 
                <div className='words' style={(this.state.fade) ? {opacity: '1', transform: "translateY(0)", filter: 'blur(0)'}: {opacity: '0'}}>to </div> 
                <div className='words' style={(this.state.fade) ? {opacity: '1', transform: "translateY(0)", filter: 'blur(0)'}: {opacity: '0'}}>Space</div>
                <div className='words' style={(this.state.fade) ? {opacity: '1', transform: "translateY(0)", filter: 'blur(0)'}: {opacity: '0'}}>X.</div>
                <div className='words' style={(this.state.fade) ? {opacity: '1', transform: "translateY(0)", filter: 'blur(0)'}: {opacity: '0'}}>Scroll</div>
                <div className='words' style={(this.state.fade) ? {opacity: '1', transform: "translateY(0)", filter: 'blur(0)'}: {opacity: '0'}}>up</div>
                <div className='words' style={(this.state.fade) ? {opacity: '1', transform: "translateY(0)", filter: 'blur(0)'}: {opacity: '0'}}>to</div>
                <div className='words' style={(this.state.fade) ? {opacity: '1', transform: "translateY(0)", filter: 'blur(0)'}: {opacity: '0'}}>prepare</div>
                <div className='words' style={(this.state.fade) ? {opacity: '1', transform: "translateY(0)", filter: 'blur(0)'}: {opacity: '0'}}>for</div>
                <div className='words' style={(this.state.fade) ? {opacity: '1', transform: "translateY(0)", filter: 'blur(0)'}: {opacity: '0'}}>launch.</div>

            </div>

            <div id='solarninja'><a href='#solar' id='solar'/></div>
 
          </div>
        </div>
      )
  }
}

