import React, {Component} from 'react';
import './Profile.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import NewUser from './usercomps/NewUser';
import Admin from './usercomps/Admin';
import CurrentUser from './usercomps/CurrentUser';
import Dialog from 'material-ui/Dialog';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class Profile extends Component{
    constructor(){
        super()
        this.state={
            userType:'',
            opendelete: false,
            yes: false,
            username: '',
            openName: false,
            notified: false,
            open: false,
            email: false,
            emailinput: '',
            spans: []
        }
        // this.logout = this.logout.bind(this);
        this.deleteaccount = this.deleteaccount.bind(this);
        this.areYouSure = this.areYouSure.bind(this);
        this.changeName = this.changeName.bind(this);
        this.updateName = this.updateName.bind(this);
        this.openName = this.openName.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.submitEmail = this.submitEmail.bind(this);
    }

    componentWillMount(){
        axios.get('/api/user').then(res=>{
            console.log("data",  res.data, "username", res.data.username, 'notified', res.data.notified);

            if (res.data.usertype==="newUser"){ //if newUser, check to see if they have an email stored in the DB
                if (!res.data.email){//if not, set state to trigger event to ask for email
                    this.setState({
                        email: true
                    })
                }
            }
        let text = `Welcome ${res.data.username}`.split('');
        console.log(res.data.username, 'suernmae')
        for (let i = 0; i < text.length; i++) {
            setTimeout((e, j) => {
                let spans = this.state.spans;
                spans.push(<span className='mast__text'>{text[i]}</span>);
                this.setState({ spans });
            }, i*20);
        }

        this.setState({
            userType: res.data.usertype,
            username: res.data.username,
            notified: res.data.notified
        })
        }).catch(e=>console.log(e))
    }

    areYouSure(){
        this.setState({
            opendelete: !this.state.opendelete
        })
    }

    deleteaccount(){
        console.log('sending delete')
        axios.delete('/api/delete').then(res=>{
            console.log(res);
            this.props.history.push('/mars');
        }).catch(e=>console.log(e))

        this.setState({
            opendelete: false,
            username: ''
        })

    }

    openName(){
        console.log("editting name");
        this.setState({
            openName : !this.state.openName
        })
    }

    updateName(e){
        this.setState({
            username: e.target.value
        })
    }

    changeName(){

        let body = {
            username: this.state.username,
            userType: this.state.userType
        }

        axios.put('/api/username', body).then(res=>{
            console.log(res);
        })

        this.openName()
    }

    updateEmail(e){
        this.setState({
            emailinput: e.target.value
        })
    }

    submitEmail(){
        let body ={
            email : this.state.emailinput
        }

        axios.put('/api/email', body).then(res=>{
            console.log(res)
        }).catch(e=>console.log(e))

        this.setState({
            email: false
        })
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render(){

        return (
        <section className='profile'>
            <div className="greeting mast mast__text"><p style={{ margin: 'auto'}}>
            {this.state.spans}</p>
            
            </div><hr/><br/>

            {(this.state.userType==='admin' ? <Admin/> : (this.state.userType==='currentUser' ? <CurrentUser notified={this.state.notified}/> : <NewUser/>))}

            <div className='profileconst'>

                {/* sidebar */}
                <div>
                    <button onClick={this.handleToggle}
                    onMouseEnter={(e) => e.target.style.color = '#920404'}
                    onMouseLeave={(e) => e.target.style.color = '#DECAAF'}
                    style={{position: "fixed", top: "25px", right: "55px", width: "75px", height: "25px", borderRadius: "10px", background: "transparent", border: "none", fontSize: "17px", color: "#DECAAF", outline: "none"}}
                    >Options</button>
                    

                    <Drawer containerStyle={{background: "rgba(0,0,0,0.7)"}} style={{color: "white"}} open={this.state.open}>

                    <a href={process.env.REACT_APP_LOGOUT}><MenuItem 
                    onMouseEnter={(e) => e.target.style.color = '#920404'}
                    onMouseLeave={(e) => e.target.style.color = '#DECAAF'}
                    style={{color: "#DECAAF"}}>Logout</MenuItem></a>
                    
                    <MenuItem onClick={this.openName}
                    onMouseEnter={(e) => e.target.style.color = '#920404'}
                    onMouseLeave={(e) => e.target.style.color = '#DECAAF'}
                    style={{color: "#DECAAF"}}>Edit Username</MenuItem>

                    <MenuItem onClick={this.areYouSure}
                    onMouseEnter={(e) => e.target.style.color = '#920404'}
                    onMouseLeave={(e) => e.target.style.color = '#DECAAF'}
                    style={{color: "#DECAAF"}}>Delete Account</MenuItem>
                    </Drawer>
                </div>

                <Dialog 
                    title="Enter your new username."
                    open={this.state.openName}
                    modal={true}
                    paperProps={{
                        style: {borderRadius: "25px"}
                    }}>
                    <input onChange={this.updateName}/>
                    <button onClick={this.changeName}>Submit</button>
                    <button onClick={this.openName}>Cancel</button>  
                </Dialog>


                <Dialog
                    title="We don't currently have an email address for you. Please provide an email address in case an administrator wishes to contact you for an interview."
                    open={this.state.email}
                    modal={true}
                    paperProps={{
                        style: {borderRadius: "25px"}
                    }}>
                    <input onChange={this.updateEmail}/>
                    <button onClick={this.submitEmail}>Submit</button>
                </Dialog>

                <Dialog 
                    title="Are you sure you want to delete your account?"
                    open={this.state.opendelete}
                    modal={true}
                    paperProps={{
                        style: {borderRadius: "25px"}
                    }}>

                    <button onClick={this.deleteaccount}>Yes</button>
                    <button onClick={this.areYouSure}>No</button>    
                </Dialog>

            </div>

        </section>
        )
    }
}