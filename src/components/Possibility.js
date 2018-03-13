import React, {Component} from 'react';
import './possibility.css';
import {Link} from 'react-router-dom';
import earthMars from '../photos/earthMarstrans.png';
import comparison from '../photos/Diagrams/earthMarsComparison.png';
import magnetoSphere from '../photos/Diagrams/magnetoSphere.png';
import eco from '../photos/Diagrams/testbed.jpg';
import plant from '../photos/Diagrams/propellantPlant.png';
import goals from '../photos/Diagrams/missionGoals.png';
import timeline from '../photos/Diagrams/timeline.png';
import axios from 'axios';
import Launches from './Launches';
import Scrollchor from 'react-scrollchor';

export default class Possibility extends Component {
    constructor(){
        super()

        this.state = {
            launches: [],
            transition: false,
            color: false
        }
    }

    componentWillMount(){
        window.scrollTo(0, 0);
        axios.get('https://api.spacexdata.com/v2/launches/upcoming').then(
            res=>{
                console.log("data from launch api", res.data);
                this.setState({
                    launches : res.data
                })
            }
        )
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
            <section className='possibility' style={this.state.color ? {color: '#DECAAF', transition: "1s"} : this.state.transition ? {width: "100vw", transition: '1s'} : {width: '0', color: 'black'}}>
                <a href='#timeline'><div className='skip'><p>Skip to SpaceX's current plans</p></div></a>

                <h1>
                    <Link to='/mars'><div className='breadcrumb'><img src={earthMars}/><span id='breadcrumbtext'>Go to Home</span></div></Link>
                    <p>Is Colonizing Mars Possible?</p>
                </h1>

                <div className='one'>
                    <h2><p>Why choose Mars in the first place?</p></h2>
                    <div className='comparison'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
                        Tortor consequat id porta nibh venenatis cras. Ac felis donec et odio pellentesque. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Consectetur libero id faucibus nisl tincidunt eget. Convallis convallis tellus id interdum velit laoreet. Euismod nisi porta lorem mollis. At imperdiet dui accumsan sit. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Lobortis elementum nibh tellus molestie. Dignissim diam quis enim lobortis scelerisque. Fringilla urna porttitor rhoncus dolor purus non enim. Eget gravida cum sociis natoque. In cursus turpis massa tincidunt dui ut ornare lectus sit.
                        </p>
                        <img src={comparison} className='shadow' alt="comparison of Earth and Mars"/>
                    </div>
                </div>

                <div className='terraforming'>
                    <h2><p>Terraforming Proposals: The following are several proposals for making Mars habitable. This is by no means an exhaustive list.</p></h2>
                    <div className='magnet'>
                        <img className='shadow' src={magnetoSphere} alt='magentic dipole diagram'/>
                        <p style={{marginRight: "50px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat odio facilisis mauris sit amet massa. Vitae justo eget magna fermentum iaculis. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Turpis egestas pretium aenean pharetra magna. Ullamcorper malesuada proin libero nunc consequat interdum. Amet nulla facilisi morbi tempus iaculis urna id. Cursus vitae congue mauris rhoncus aenean vel elit. Fringilla ut morbi tincidunt augue interdum velit. Purus in mollis nunc sed id semper. Massa eget egestas purus viverra accumsan in. Diam sit amet nisl suscipit adipiscing bibendum est. Amet mattis vulputate enim nulla aliquet porttitor lacus.<br/><br/>

                        Facilisis gravida neque convallis a. Id neque aliquam vestibulum morbi blandit. Pharetra massa massa ultricies mi quis hendrerit. Orci ac auctor augue mauris augue neque. Semper risus in hendrerit gravida rutrum quisque. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Pellentesque sit amet porttitor eget dolor. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Auctor neque vitae tempus quam pellentesque. Lorem ipsum dolor sit amet consectetur. Quam adipiscing vitae proin sagittis nisl rhoncus. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Eu turpis egestas pretium aenean pharetra. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Vitae auctor eu augue ut lectus arcu bibendum. Massa id neque aliquam vestibulum morbi blandit. Varius duis at consectetur lorem.
                        eget dolor. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Auctor neque vitae tempus quam pellentesque. Lorem ipsum dolor sit amet consectetur. Quam adipiscing vitae proin sagittis nisl rhoncus. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Eu turpis egestas pretium aenean pharetra. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Vitae auctor eu augue ut lectus arcu bibendum. Massa id neque aliquam vestibulum morbi blandit. Varius duis at consectetur lorem.</p>
                    </div>

                    <div className='ecopoiesis'>
                        <p> 
                        Ecopoiesis:<br/><br/> 
                        A arcu cursus vitae congue mauris rhoncus aenean. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Massa sed elementum tempus egestas sed sed risus pretium. Arcu odio ut sem nulla. Duis at tellus at urna condimentum mattis pellentesque id nibh. Tincidunt arcu non sodales neque sodales. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Accumsan in nisl nisi scelerisque eu ultrices vitae. Porttitor leo a diam sollicitudin tempor. Auctor eu augue ut lectus arcu. Nulla aliquet enim tortor at auctor. Sed enim ut sem viverra.<br/><br/>

                        In hendrerit gravida rutrum quisque non tellus orci ac auctor. Molestie nunc non blandit massa enim. Nisl suscipit adipiscing bibendum est ultricies integer. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Posuere morbi leo urna molestie at. Eget nunc lobortis mattis aliquam. Libero nunc consequat interdum varius sit amet mattis. Ac orci phasellus egestas tellus rutrum. Diam phasellus vestibulum lorem sed risus ultricies. Est ante in nibh mauris.</p>
                        <img className='shadow'style={{marginRight:"50px"}} src={eco} alt="Ecopoiesis diagram"/>
                    </div>

                    <div className='propellent'>
                        <h3><p style={{textAlign: "center", height: "30px", margin: '0'}}>SpaceX Propellent Plant</p></h3>
                        <p>Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Faucibus vitae aliquet nec ullamcorper sit amet risus. Purus viverra accumsan in nisl nisi. Sed enim ut sem viverra aliquet eget sit amet. Lorem mollis aliquam ut porttitor leo a. </p><br/>
                        <img src={plant} className="shadow" alt='propellent plant diagram'/>
                    </div>

                   <div id='timeline'>
                    <h3><p style={{fontSize:"30px", textAlign:"center"}}>SpaceX Timeline, Mission Goals, and Upcoming Launches</p></h3>
                        <p style={{marginRight:'40px'}}>The following diagrams show SpaceX's current timeline and initial mission goals for Mars Colonization efforts as of September 2017, as delivered during Elon Musk's presentation at the Astronautical Congress.</p>
                        <img className='shadow' src={goals} alt='initial mission goals'/>
                        <img className='shadow' src={timeline} alt='timeline'/>
                        <p style={{marginTop:'40px', marginBottom: "40px"}}>This final section shows the upcoming SpaceX launches:</p>
                        <div>
                            <Launches
                            data={this.state.launches} 
                            header={[
                                {
                                    name: "Flight Number",
                                },
                                {
                                    name: "Launch Date",
                                },
                                {
                                    name: "Rocket Name",
                                },
                                {
                                    name: "Launch Site",
                                }
                            ]}
                            />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
