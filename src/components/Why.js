import React, {Component} from 'react';
import './why.css';
import blueDawn from '../photos/bluedawn.jpg';
import earthMars from '../photos/earthMarstrans.png';
import {Link} from 'react-router-dom';
import marsColony2 from "../photos/marscolony2.jpg";

export default class Why extends Component{
    constructor(){
        super()

        this.state={
            transition: false,
            color: false
        }
    }

    componentWillMount(){
        window.scrollTo(0, 0);
    }

    componentDidMount(){
        setTimeout(()=>{
        this.setState({
            transition: true
        })},2)

        setTimeout(()=>{
            this.setState({
                color: true
            })},700)
    }

    render(){
        return(
            <section className = 'why' style={this.state.color ? {color: '#DECAAF', transition: "1s"} : this.state.transition ? {width: "100vw", transition: '1s'} : {width: '0', color: 'black'}}>
                <h1>
                    <Link to='/mars'><div className='breadcrumb'><img src={earthMars}/><span id='breadcrumbtext'>Go to Home</span></div></Link>
                    <p>Why is Colonizing Mars Important?</p>
                </h1>
                <div className="bluedawnContainer">
                    <div className='footer'>
                        <img src={blueDawn} alt="blue dawn on Mars" className="shadow"></img>
                        <p> On Mars, dawn and dusk are blue, contrasting against the red sky of the Martian day. [Photo provided by NASA's Mars exploration rover, Spirit.]</p>
                    </div>
                    <p style={{marginRight : '50px'}}>"That is the exploration that awaits you! Not mapping stars and studying nebula, but charting the unknown possibilities of existence."  - Leonard Nimoy
                    <br/><br/>    
                    Space is our next “unknown”, and Mars is the new frontier. The need for exploration and discovery that is so deeply rooted in the Human spirit can find a new outlet on red, alien sands bathed in blue dusks and dawns...<br/><br/>
                    ...which all sounds lovely. But let’s be realistic, right? Afterall, humanity also has a strong practical streak. So aside from living out a sci-fi novel, what are the tangible benefits of trying to colonize Mars?
                    </p>
                </div>

                <div className='reasons'>
                    <p>Lorem ipsum dolor sit amet, nulla congue vivamus dui, eu placerat rhoncus maecenas. Et porta quam consectetuer turpis semper tortor, nunc cupidatat tellus, vitae fames tortor, quam sed imperdiet sociis proin, id amet aliquam nec diam consectetuer nam. Porttitor maecenas rhoncus ac ac at taciti, nec magna nunc montes ac. Interdum eu, arcu sodales nulla ut, ipsum at mollis duis malesuada bibendum tincidunt, in a ipsum id. At consectetuer ac, tempor eget lacus, condimentum consectetuer velit ullam duis eros, tempor pede tincidunt fuga, quam nonummy nisi suspendisse interdum vehicula neque. Urna sollicitudin ligula cras, elit luctus egestas justo hac vivamus tortor, erat faucibus eu. Eget dolor orci donec penatibus orci nibh, turpis ultrices pulvinar non a hac, ultricies lacinia. Pharetra dis, quam ipsum. Semper non ante dictum, donec est augue, dolor vel id. Blandit morbi sed ridiculus. Lacus porttitor, suscipit odio quam volutpat vestibulum ut, praesent sed aliquam blandit libero diam. Dictumst per etiam.</p>
                    <div className='footer'>
                    <img src={marsColony2} className="shadow" style={{marginRight: "50px"}}>
                    </img>
                    <p style={{fontSize:'14px', marginTop:'0'}}>A possible rendition of a Mars Colony.</p></div>
                </div>  

                <div className='list'>
                    <div className='cheaperRockets'>
                        <iframe className="shadow" src="https://giphy.com/embed/3o7aCQPfosAzs2TqsE" width="480" height="270" frameBorder="0" allowFullScreen></iframe>
                        <p style={{width: "55%"}}>Developing propulsive landing. Means cheaper rockets and possible super fast world transportation. Lorem ipsum dolor sit amet, nulla congue vivamus dui, eu placerat rhoncus maecenas. Et porta quam consectetuer turpis semper tortor, nunc cupidatat tellus, vitae fames tortor, quam sed imperdiet sociis proin, id amet aliquam nec diam consectetuer nam. Porttitor maecenas rhoncus ac ac at taciti, nec magna nunc montes ac. Interdum eu, arcu sodales nulla ut, ipsum at mollis duis malesuada bibendum tincidunt, in a ipsum id. At consectetuer ac, tempor eget lacus, condimentum consectetuer velit ullam duis eros, tempor pede tincidunt fuga, quam nonummy nisi suspendisse interdum vehicula neque. Urna sollicitudin ligula cras, elit luctus egestas justo hac vivamus tortor, erat faucibus eu. Eget dolor orci donec penatibus orci nibh, turpis ultrices pulvinar non a hac, ultricies lacinia. Pharetra dis, quam ipsum. Semper non ante dictum, donec est augue, dolor vel id. Blandit morbi sed ridiculus. Lacus porttitor, suscipit odio quam volutpat vestibulum ut, praesent sed aliquam blandit libero diam. Dictumst per etiam.</p>
                    </div>
                </div>  
            </section>
        )
    }
}