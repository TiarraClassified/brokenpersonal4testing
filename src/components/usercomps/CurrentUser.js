import React, { Component } from 'react';
import './currentuser.css';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import axios from 'axios';

export default class CurrentUser extends Component{
    constructor(props){
        super(props)
        this.state={
            stop: false,
            open: false,
            adminName: "",
            adminEmail: ''
        }
        this.message = this.message.bind(this);
        this.close = this.close.bind(this);
    }

    componentWillMount(){
        console.log("props", this.props)
        if (this.props.notified){
            console.log("axios to admin", this.props.notified)
            axios.get("/api/getAdminInterview").then(res=>{
                console.log(res.data);
                this.setState({
                    adminName: res.data[0].username,
                    adminEmail: res.data[0].email
                })
            })
        }
    }

    message(){
        this.setState({
            stop: true,
            open: true
        })
    }

    close(){
        this.setState({
            open: false
        })
    }

    render(){
        let notification = <div></div>
        if (this.props.notified){
            notification = <div onClick={this.message} style={(this.state.stop) ? {animation: 'none', background: "transparent", border: "1px solid #DECAAF", opacity: ".5"}:{}} className='yes'>Notification</div>
        }

        return(
            <div className='currentuser'>
                <Link to='/survey' id='edit'><div>Edit Survey Answers</div></Link>

                {notification}

                <Dialog
                    open={this.state.open}
                    onRequestClose={this.close}
                    modal={false}
                    paperProps={{
                        style: { borderRadius: '25px' }
                    }}
                    style={{textAlign : "center", borderRadius : '25px'}}>

                    {`You have been selected for an initial interview! Please check your email. You should have received an email from ${this.state.adminName} at ${this.state.adminEmail}. If you have not received an email, please reach out to the administrator. Thank you, and we look forward to meeting you!`}

                </Dialog>
            </div>
        )
    }
}