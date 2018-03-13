import React, { Component } from 'react';
import './admin.css';
import axios from 'axios';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { stringify } from 'querystring';
import QueryTable from './QueryTable';
import Dialog from "material-ui/Dialog";
import {Link} from 'react-router-dom';

export default class Admin extends Component{
    constructor(){
        super()
        this.state = {
            surveys: [],
            value1: '',
            value2: '',
            criteria: '',
            filtered: [],
            open: false, 
            email: '',
            message: "Hello! You have been selected for an interview with SpaceX based upon the answers you provided on the Mars colonization survey. Please respond to this email at your earliest convenience to schedule an interview time. Thank you, and we look forward to hearing from you!",
            subject: "SpaceX Interview",
            selectedUser: {},
            useropen: false,
            userid: 0
        }

        this.submitQuery = this.submitQuery.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.input = this.input.bind(this);
        this.notify  = this.notify.bind(this);
        this.selectSurvey = this.selectSurvey.bind(this);
    }

    componentWillMount(){
        axios.get('/api/getsurveys').then(res=>{
            this.setState({
                surveys : res.data
            })
        }).catch(e=>console.log(e))
    }

    handleChange1 = (event, index, value) => this.setState({value1:value});
    handleChange2 = (event, index, value) => this.setState({value2:value});
    input = (e)=>{this.setState({criteria:e.target.value})};

    submitQuery(){

        console.log("ahhhhhhhhh", this.state.value1, this.state.value2, this.state.criteria)
        const value1 = this.state.value1;
        let criteria = this.state.criteria;
        const array = this.state.surveys;
        var filtered = [];

        if (criteria === 'true') {//need to turn string into Boolean to compare with DB results
            criteria = true;
        } 
        else if (criteria === 'false'){
            criteria = false;
        }

        if(value1 === 'all'){
            filtered = this.state.surveys
        }

        if (this.state.value2==="="){
                array.map(survey=>{
                  for (var k in survey){
                    if (k===value1 && survey[k]==criteria){
                      return filtered.push(survey);
                    }
                  }
                })
        }
        else if (this.state.value2==="<"){
                array.map(survey=>{
                  for (var k in survey){
                    if (k===value1 && survey[k]<criteria){
                      return filtered.push(survey);
                    }
                  }
                })
        }
        else if (this.state.value2===">"){
                array.map(survey=>{
                  for (var k in survey){
                    if (k===value1 && survey[k]>criteria){
                      return filtered.push(survey);
                    }
                  }
                })
        }

        this.setState({
            filtered
        })
    }

    notify(userid){
        console.log("starting notify", userid);

        axios.post(`/api/notify${userid}`).then(res=>{
            console.log(res.data, "user info from notify call");
            this.setState({
                open: true,
                email: res.data.email
            })

            console.log("user email", res.data.email);
            var mailOptions = { //send automatic email to user
                from: "chocobocaravan@gmail.com",
                to: res.data.email,
                subject: this.state.subject, 
                html: this.state.message,
                text: this.state.message
                };

            axios.post('/api/email',
            mailOptions
            ).then(res=>{
                console.log(res.data);
            }
            ).catch(e=>console.log(e))

        }).catch(e=>console.log(e))
        

        
    }

    handleClose = () => {
        this.setState({open: false});
      };

    handleUserClose = () => {
    this.setState({useropen: false});
    };
    
    selectSurvey(index){
        console.log("hitting selected survey", index, this.state.filtered)
        const arg = this.state.filtered[index];
        this.setState({
            useropen: true,
            selectedUser: arg, 
            userid: arg.userid
        })
    }

    render(){
        console.log("filtered", this.state.filtered);

        if (this.state.useropen){
            var SR = []
            var kitten = this.state.selectedUser;
    
            for (var y in kitten){
                SR.push(<span>{`${y}: ${kitten[y]}`}</span>)
            }
        }

        return(
            <div className='admin'>
                Search through survey results:
                <Link to='/charts'><div id='charts'>Visualize Data</div></Link>

                <div className='filter'>
                    <div className='boxes'>
                        {/*dropdownmenu1*/}
                        <div>
                            <DropDownMenu value={this.state.value1} onChange={this.handleChange1} style={{background: "white", borderRadius: "5px", marginTop: "10px", marginRight: "10px"}}>
                            <MenuItem value={"all"} primaryText="All" />
                            <MenuItem value={"iq"} primaryText="IQ" />
                            <MenuItem value={'userid'} primaryText="Userid" />
                            <MenuItem value={'educationlvl'} primaryText="Education Level" />
                            <MenuItem value={'children'} primaryText="Number of Children" />
                            <MenuItem value={"fertility"} primaryText="Fertility" />
                            <MenuItem value={"bloodpressure"} primaryText="Blood Pressure" />
                            <MenuItem value={'maritalstatus'} primaryText="Marital Status" />
                            <MenuItem value={'heart'} primaryText="Heart Disease" />
                            <MenuItem value={'seizures'} primaryText="Seizures" />
                            <MenuItem value={'medications'} primaryText="On Medications" />
                            </DropDownMenu>
                        </div>

                        {/*dropdownmenu2*/}
                        <div>
                            <DropDownMenu value={this.state.value2} onChange={this.handleChange2} style={{background: "white", borderRadius: "5px", marginTop: "10px", marginRight: "10px"}}>
                            <MenuItem value={"="} primaryText="=" />
                            <MenuItem value={">"} primaryText=">" />
                            <MenuItem value={'<'} primaryText="<" />
                            </DropDownMenu>
                        </div>

                        <input onChange={this.input} placeholder='enter search criteria'/>
                    </div>

                    <button id='query' onClick={this.submitQuery}>Query</button>
                    <br/>

                    <QueryTable queryresults={this.state.filtered} selectSurvey={this.selectSurvey}/>

                    <Dialog 
                    title="User has been notified."
                    titleStyle={{textAlign: "center"}}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    modal={false}
                    paperProps={{
                        style: { borderRadius: '25px' }
                    }}
                    style={{borderRadius : '25px'}}>
                    </Dialog>

                    <Dialog 
                    title="All Survey Results:"
                    titleStyle={{textAlign: "center"}}
                    open={this.state.useropen}
                    onRequestClose={this.handleUserClose}
                    modal={false}
                    paperProps={{
                        style: { borderRadius: '25px' }
                    }}
                    style={{textAlign : "left", borderRadius : '25px'}}>
                        <div style={{display: "flex", flexDirection: "column", justifyContent:"space-around"}}>
                            {SR}
                            <br/>
                            <button id='notify' onClick={()=>{this.notify(this.state.userid); this.handleUserClose()}}>Notify User</button>
                        </div>

                    </Dialog>

                </div>

            </div>
        )
    }
}