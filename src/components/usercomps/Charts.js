import React, {Component} from 'react';
import './Charts.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Chart} from 'react-google-charts';
import {render} from 'react-dom';

export default class Charts extends Component{
    constructor(){
        super()

        this.state={
            data : [],
            results: [],
            options: {}
        }
    }

    componentWillMount(){
        axios.get('/api/getsurveys').then(res=>{
            this.setState({
                data : res.data
            })
        }).catch(e=>console.log(e))
    }

    handleInput(field){

        console.log(field, 'field');
        const array = this.state.data;

        if (field==='educationlvl'){
            var bach= 0;
            var high = 0;
            var masters = 0;
            var doc = 0;
            var none = 0;

           array.map(object=>{
                var pufferfish = object.educationlvl;

                switch(pufferfish){
                    case 'highschool':
                      ++high;
                      break;
                    case 'none':
                      ++none;
                      break;
                    case 'masters':
                      ++masters;
                      break;
                    case 'doctorate':
                      ++doc;
                      break;
                    case "bachelors":
                      ++bach;
                      break;
                  }
            })

        var results = [
            ['Education Level', "Percentage of Applicants"],
            ['bachelors' , bach],
            ['highschool' , high],
            ['masters' , masters],
            ['doctorate', doc], 
            ['none', none]]

        this.setState({
            results,
            options: {title: 'Education Level of Applicants',
                        is3D: true}
        })
        }

        else if (field === 'iq'){
            var below100 = 0;
            var between100115 = 0;
            var between115130 = 0;
            var above130 = 0;

            array.map(object=>{
                var pufferfish = object.iq;

                switch(true){
                    case pufferfish<100:
                      ++below100;
                      break;
                    case pufferfish>=100 && pufferfish<115:
                      ++between100115;
                      break;
                    case pufferfish>=115 && pufferfish<130:
                      ++between115130;
                      break;
                    case pufferfish>130:
                      ++above130;
                      break;
                  }
            })

        var results = [
            ['IQ', "Percentage of Applicants"],
            ['Below 100' , below100],
            ['Between 100 and 115' , between100115],
            ['Between 115 and 130' , between115130],
            ['Above 130', above130]] 
            
        this.setState({
            results, 
            options: {title: 'IQ Level of Applicants',
            is3D: true}
        })
        }

        else if (field === 'children'){
            var taco = 0;
            var grassblade = 0;
            var cheesewheel = 0;
            var axel = 0;
            var zoinks = 0;

            array.map(object=>{
                var pufferfish = object.children;
                console.log(pufferfish)
                switch(true){
                    case pufferfish===0:
                      ++taco;
                      break;
                    case pufferfish===1:
                      ++grassblade;
                      break;
                    case pufferfish===2:
                      ++cheesewheel;
                      break;
                    case pufferfish===3:
                      ++axel;
                      break;
                    case pufferfish>3:
                      ++zoinks;
                      break;
                  }
            })

        var results = [
            ['Number of Children', "Percentage of Applicants"],
            ['Zero' , taco],
            ['One' , grassblade],
            ['Two' , cheesewheel],
            ['Three', axel],
            ['Greater Than Three', zoinks]] 
            
        this.setState({
            results, 
            options: {title: 'Number of Children Per Applicant',
            is3D: true}
        })
        }

        else if (field==="maritalstatus"){
            var married = 0;
            var single = 0;
            
            array.map(object=>{
                var pufferfish = object.maritalstatus;

                if (pufferfish==='single'){
                    ++single
                }
                else {
                    ++married
                }
            })

            results = [['Marital Status', 'Percentage of Applicants'],
                ["Single", single],
                ["Married", married]]

        this.setState({
            results, 
            options: {title: 'Marital Status of Applicants',
            is3D: true}
        })
        }

        //this last part is for all Boolean fields
        else {
             var truth = 0;
             var lies = 0;

             array.map(object=>{
                 var pufferfish = object[field]

                 if (pufferfish===true){
                     ++truth
                 }
                 else {
                     ++lies
                 }
             })
            results = [[`${field}`, 'Percentage of Applicants'],
                ['True', truth],
                ['False', lies]]

            var title = ''

            switch(field){
                case 'bloodpressure':
                    title = "Has High Blood Pressure";
                    break;
                case 'heart':
                    title = "Has Heart Disease";
                    break;
                case 'medications':
                    title = "On Long-Term Medication";
                    break;
                case 'seizures':
                    title = 'Has Seizures';
                    break;
                case 'fertility':
                    title = 'Is Fertile';
                    break;
            }
            
        this.setState({
            results, 
            options: {title: `${title}`,
            is3D: true}
        })
        }
    }

    render(){

        return(
            <div className='charts'>
                <div className='qualHeader'>
                    <p>Choose a Qualification to Display</p>
                    <Link to='/profile'><div id='back'>Back to Admin Page</div></Link>
                </div>

                <div className="firstButtons">
                    <button onClick={this.handleInput.bind(this,"educationlvl")}>Education Level</button>
                    <button onClick={this.handleInput.bind(this,"iq")}>IQ</button>
                    <button onClick={this.handleInput.bind(this,"maritalstatus")}>Marital Status</button>
                    <button onClick={this.handleInput.bind(this,"children")}>Number of Children</button> 
                    <button onClick={this.handleInput.bind(this,"medications")}>On Medication</button>                  
                </div>

                <div className="secondButtons">
                    <button onClick={this.handleInput.bind(this,"fertility")}>Fertility</button>
                    <button onClick={this.handleInput.bind(this,"heart")}>Heart Disease</button>
                    <button onClick={this.handleInput.bind(this,"seizures")}>Seizures</button>
                    <button onClick={this.handleInput.bind(this,"bloodpressure")}>Blood Pressure</button>  
                </div>

                <div id='pie'>
                    {this.state.results[0] && <Chart 
                    chartType="PieChart"
                    data={this.state.results}
                    options={this.state.options}
                    width="100%"
                    height="500px"/>}
                </div>
            </div>
        )
    }
}