import React, {Component} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import Sidebar from './sidebar';
import TextField from 'material-ui/TextField';
import Sun from '../photos/sun.png';
import Phobos from '../photos/phobos.png';

export default class Home extends Component {
    constructor(){
        super()

        this.state={
            from : '',
            subject : '',
            message : '',
            openEmail: false,
            openSignUp: false,
            email: '',
            username: '',
            password: ''
        }

    this.handleOpen = this.handleOpen.bind(this);
    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);
    this.cancelSignUp = this.cancelSignUp.bind(this);
    this.openRegistration = this.openRegistration.bind(this);
    this.signUp = this.signUp.bind(this);

    }

    componentWillMount(){
        window.scrollTo(0, 0);
    }

    from(newString){
        this.setState({
            from : newString
        })
    }

    subject(newString){
        this.setState({
            subject : newString
        })
    }

    message(newString){
        this.setState({
            message : newString
        })
    }

    email(newString){
        this.setState({
            email : newString
        })
    }

    username(newString){
        this.setState({
            username : newString
        })
    }

    password(newString){
        this.setState({
            password : newString
        })
    }

    handleOpen(){
        this.setState({
            openEmail : true
        })
    }

    submit(){
        var mailOptions = {
            from: this.state.from,
            to: "chocobocaravan@gmail.com",
            subject: this.state.subject, 
            html: this.state.message
          };

        axios.post('/api/email',
            mailOptions
        ).then(res=>{
            console.log(res);
            this.setState({
                openEmail: false
            })
        }
        ).catch(e=>console.log(e))
    }

    cancel(){
        console.log('cancelling');
        this.setState({
            openEmail: false
        })
    }

    openRegistration(){
        this.setState({
            openSignUp : true
        })
    }

    signUp(){
        let body = {
            username : this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('/api/register', body).then(res=>{
            console.log(res);
            this.setState({
                openSignUp : false
            })
        })
    }

    cancelSignUp(){
        this.setState({
            openSignUp: false
        })
    }

    render(){

        console.log(window.scrollY, "scroll")

        const styles = {
            underlineStyle: {
              borderColor: '#DECAAF',
            },
            floatingLabelStyle: {
              color: '#DECAAF',
            },
            floatingLabelFocusStyle: {
              color: '#DECAAF',
            }
          };

        return(
        <div className='container' id='opacity'>
            <div className='parallax'></div>    

            <div className='navigation'>
                <Link to='/day'><div id='sun'><img src={Sun}/><span id='suntext'>Explore a Martian Day</span></div></Link>
                <Sidebar/>
                <Link to='/evening'><div id='phobos'><img src={Phobos}/><span id='phobostext'>Explore a Martian Night</span></div></Link>
            </div>

            <p>"You want to wake up in the morning and think the future is going to be great - and that's what being a spacefaring civilization is all about. It's about believing in the future and thinking that the future will be better than the past. And I can't think of anything more exciting than going out there and being among the stars.” ~Elon Musk <br/><br/>
            Colonizing Mars is about human imagination and pushing the limits. This need to constantly push our boundaries is an innate human trait that will only die out once our species fades away.
            Click on the following images to discover more about SpaceX's colonization plans for Mars. 
            </p>

            <Link to='/mars/why' style={{textDecoration: "none", color: "#DECAAF"}}><div className='pic2'><br/><br/><br/>
                <p id='why'>Click here to read about why colonlizing Mars is a worthwhile pursuit.</p>
            </div></Link>

            <p>"When something is important enough, you do it even if the odds are not in your favor." ~ Elon Musk<br/><br/>
            Is colonizing Mars even possible? Every year new technologies and ideas emerge, bringing us closer to a reality of a Mars colony. The following page is by no means an exhaustive list of all the ideas, technologies, and organizations dedicated to this goal.<br/><br/></p>

            <Link to='/mars/possibility' style={{textDecoration: "none", color: "#DECAAF"}}><div className='pic3'>
                <br/><br/><br/>
                <p id='possibility'>Click here to read about terraforming plans and SpaceX's upcoming launches.</p>
            </div></Link>

            <p>“What I’m trying to do is to make a significant difference in space flight and help make space flight accessible to almost anyone.” ~ Elon Musk <br/><br/>
                Will it be affordable to go to Mars?
                While the first launches will be quite expensive, SpaceX hopes to reduce costs to around the price of a median house in the United States. Much of the price reduction will come through advances in rocket technologies, especially in reusibility.</p>

            <Link to="/mars/rockets" style={{textDecoration: "none", color: "#DECAAF"}}><div className='pic4'>
                <br/><br/><br/>
                <p id='BFR'>Click here to read about SpaceX's BFR rocket, costs, and the affordibility of traveling to Mars.</p>
            </div></Link>

            <div id="login" className='contactUs'>
                <div><p style={{boxShadow: 'none'}}>Like what you see and want to see if you're eligible to be one of the first colonists on Mars? Using the buttons below, sign up to take the eligibility survey and put your name in the pool of candidates, or contact SpaceX.<br/><br/></p>
                <div className='homebuttons'>

                    <a href={process.env.REACT_APP_LOGIN}><button id='signup'>Log In</button></a>

                    <button id="email" onClick={this.handleOpen()} className=''>Contact SpaceX</button>
                </div>
                </div>
            </div>

            <div className='spaceX'></div>
                <Dialog 
                title="Please fill out the following information:"
                open={this.state.openEmail}
                modal={true}
                paperProps={{
                    style: { borderRadius: '25px' }
                }}
                style={{opacity : '0.9', textAlign : "center", borderRadius : '25px'}}>
                <div className="dialog">
              
                    <TextField onChange={event=>this.from(event.target.value)}
                    floatingLabelText="Your email address"
                    /><br />
                    <TextField onChange={event=>this.subject(event.target.value)}
                    floatingLabelText="Subject line"
                    /><br />
                    <TextField onChange={event=>this.message(event.target.value)}
                    floatingLabelText="Your message"
                    multiLine={true}
                    fullWidth={true}
                    rows={10}
                    /><br />
            
                    <div className="dialogButton">
                    <button onClick={this.submit}
                    style={{borderRadius : "6px",
                    width: "100px"}}>Submit</button>
                    <button onClick={this.cancel}
                    style={{borderRadius : "6px",
                    width: "100px"}}>Cancel</button>
                    </div>
                </div>
                </Dialog>
{/*this is your dialog box */}
                <Dialog id='emaildialog'
                title="Please fill out the following information:"
                open={this.state.openSignUp}
                modal={true}
                paperProps={{
                    style: { border: '1px solid red', borderRadius: '25px', backgroundColor: 'black' }
                }}
                bodyStyle={{
                    style: {background: "black !important"}
                }}
                style={{opacity : '0.9', textAlign : "center", borderRadius : '25px', background: '#7D7878 !important'}}>
                <div className="dialog">
                    <TextField onChange={event=>this.email(event.target.value)}
                    floatingLabelText="Your email address"
                    underlineFocusStyle={{ ...styles.underlineStyle, border: '1px solid red'}}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    /><br />
                    <TextField onChange={event=>this.username(event.target.value)}
                    floatingLabelText="Username"
                    /><br />
                    <TextField onChange={event=>this.password(event.target.value)}
                    floatingLabelText="Password"
                    type="password"
                    /><br />

                    <div className="dialogButton">
                    <button onClick={this.signUp}
                    style={{borderRadius : "6px",
                    width: "100px"}}>Submit</button>
                    <button onClick={this.cancelSignUp}
                    style={{borderRadius : "6px",
                    width: "100px"}}>Cancel</button>
                    </div>

                </div>
                </Dialog>

                <div className='disclaimer'><p>PLEASE NOTE: THIS IS A STUDENT PROJECT. THIS IS NOT AFFILIATED WITH SPACEX IN ANY WAY. </p></div>
            </div>
    )
}
}
