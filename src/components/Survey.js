import React, {Component} from 'react';
import './Survey.css';
import axios from "axios";

export default class Survey extends Component{
    constructor(){
        super()
        this.state = {
            iq: 0,
            educationlvl : {
                highschool: false, 
                bachelors: false, 
                masters: false, 
                doctorate: false, 
                none: false
            },
            certifications: '',
            skills: '',
            maritalstatus: '',
            children: 0,
            fertility: false,
            heart: false, 
            seizures: false, 
            bloodpressure: false,
            medications: false, 
            mars: '',
            userType: ''
        }
        this.submit = this.submit.bind(this);
    }

    componentWillMount(){ 
        axios.get('/api/user').then(res=>{
            if (res.data.usertype==="currentUser"){//if the user already has survey results, pull these results and display them. 

                this.setState({
                    userType: res.data.usertype
                })

                axios.get('/api/surveyresults').then(
                    res=>{
                        const {iq, educationlvl, certifications, skills, maritalstatus, children, fertility, heart, seizures, bloodpressure, medications, mars} = res.data[0]; 

                        //have to convert educationlvl into an obejct so that it works on state for my radio buttons
                        let temp = {
                            highschool: false, 
                            bachelors: false, 
                            masters: false,
                            doctorate: false, 
                            none: false
                        }

                       for (var k in temp){
                            if (k===educationlvl){
                                temp[k]=true
                            }
                        }

                        //right now a lot of values are coming back as T/F. But in order for my radio buttons to work, they need to be 'yes'/'no'. Converting these values...
                        let TF = {
                            fertility, 
                            heart, 
                            seizures, 
                            bloodpressure, 
                            medications
                        }

                        for (var y in TF){
                            if (TF[y]===true){
                                TF[y]="yes"
                            }
                            else {
                                TF[y]='no'
                            }
                        }

                        this.setState({
                            iq: iq,
                            educationlvl: temp,
                            certifications: certifications, 
                            skills: skills,
                            maritalstatus: maritalstatus,
                            children: children,
                            fertility: TF.fertility,
                            heart: TF.heart,
                            seizures: TF.seizures,
                            bloodpressure: TF.bloodpressure,
                            medications: TF.medications,
                            mars: mars
                        })

                    }
                )
            }
        })
    }

    submit(){

        var temp = this.state.educationlvl;
        var education = '';

        for (var i in temp){
            if (temp[i]===true){
                education = i;
            }
        }

        let body = {
            iq : this.state.iq, 
            educationlvl : education,
            certifications: this.state.certifications,
            skills: this.state.skills,
            maritalstatus: this.state.maritalstatus,
            children: this.state.children,
            fertility: this.state.fertility,
            heart: this.state.heart, 
            seizures: this.state.seizures, 
            bloodpressure: this.state.bloodpressure,
            medications: this.state.medications, 
            mars: this.state.mars
        }

        if (this.state.userType==="currentUser"){
            axios.put('/api/updateSurvey', body).then(res=>{
                console.log(res.data);
                this.props.history.push('/profile');
            })
        }
        else{
            axios.post('/api/survey', body).then(res=>{
                this.props.history.push('/profile');
            })}
    }

    handleEducationLvl(field, e){
        let temp = 
        {
            highschool: false, 
            bachelors: false, 
            masters: false, 
            doctorate: false, 
            none: false
        }
    
        for (var k in temp){
            if (k===e.target.id){
                temp[k]=true
            }
        }
        console.log(temp)
        this.setState({
            educationlvl: temp
        })
    }

    handleChangeRadio(field, e) {
        console.log(field, e.target.id);

        this.setState({
            [field] : e.target.id
        })

        }

    handleChangeText(field, e){
        console.log(field, e.target.value);
        this.setState({
            [field] : e.target.value
        })
    }

    render(){
        return (
        <section className='whole'>
            <div className='survey'>
            <p>IQ:<input value={this.state.iq} onChange={this.handleChangeText.bind(this, "iq")} /> If you don't know your approximate IQ, you can take an IQ test <a href="https://www.123test.com/iq-test/">here</a></p><br/>

            <p>Highest level of education achieved: 
                <input checked={this.state.educationlvl.highschool} onClick={this.handleEducationLvl.bind(this, "educationlvl")} type='radio' id='highschool' name='education'/>
                <label htmlFor='highschool'>Highschool/GED</label>

                <input checked={this.state.educationlvl.bachelors} onChange={this.handleEducationLvl.bind(this, "educationlvl")}  type='radio' id='bachelors' name='education'/>
                <label htmlFor='bachelors'>Bachelor's Degree</label>

                <input checked={this.state.educationlvl.masters} onChange={this.handleEducationLvl.bind(this, "educationlvl")} type='radio' id='masters' name='education'/>
                <label htmlFor='masters'>Master's Degree</label>

                <input checked={this.state.educationlvl.doctorate} onChange={this.handleEducationLvl.bind(this, "educationlvl")}  type='radio' id='doctorate' name='education'/>
                <label htmlFor='doctorate'>Doctorate</label>

                <input checked={this.state.educationlvl.none} onChange={this.handleEducationLvl.bind(this, "educationlvl")}  type='radio' id='none' name='education'/>
                <label htmlFor='none'>None of the above</label>
            </p><br/>

            <p>List areas of degree and/or certifications:
                <textarea onChange={this.handleChangeText.bind(this, "certifications")} value={this.state.certifications} style={{width:"99%", height: "100px"}}></textarea>
            </p> <br/> 

            <p>Please list any special skills that you have:
                <textarea onChange={this.handleChangeText.bind(this, "skills")} value={this.state.skills} style={{width:"99%", height:'100px'}}></textarea>
            </p><br/>

            <p>Marital Status:
                <input checked={this.state.maritalstatus==="single"} onChange={this.handleChangeRadio.bind(this, "maritalstatus")} type='radio' id='single' name='marital'/>
                <label htmlFor='single'>Single</label> 

                <input checked={this.state.maritalstatus==="married"} onChange={this.handleChangeRadio.bind(this, "maritalstatus")} type='radio' id='married' name='marital'/>
                <label htmlFor='married'>Married</label> 
            </p><br/>

            <p>Number of Children:
                <input value={this.state.children} onChange={this.handleChangeText.bind(this, "children")} />
            </p><br/>

            <p>To the best of your knowledge, are you fertile?
                <input checked={this.state.fertility==="yes"} onChange={this.handleChangeRadio.bind(this, "fertility")} type='radio' id='yes' name='fertility'/>
                <label htmlFor='yes'>Yes</label>

                <input checked={this.state.fertility==="no"} onChange={this.handleChangeRadio.bind(this, "fertility")} type='radio' id='no' name='fertility'/>
                <label htmlFor='no'>No</label>
            </p><br/>

            <p>Do you have a history of the following:<br/>
            <div style={{marginLeft:'40px'}}>
            Heart Disease:
                <input checked={this.state.heart==="yes"} onChange={this.handleChangeRadio.bind(this, "heart")} type='radio' id='yes' name='heart'/>
                <label htmlFor='yes'>Yes</label>

                <input checked={this.state.heart==="no"} onChange={this.handleChangeRadio.bind(this, "heart")} type='radio' id='no' name='heart'/>
                <label htmlFor='no'>No</label><br/>
            Seizures:
                <input checked={this.state.seizures==="yes"} onChange={this.handleChangeRadio.bind(this, "seizures")} type='radio' id='yes' name='seizures'/>
                <label htmlFor='yes'>Yes</label>

                <input checked={this.state.seizures==="no"} onChange={this.handleChangeRadio.bind(this, "seizures")} type='radio' id='no' name='seizures'/>
                <label htmlFor='no'>No</label><br/>
            High or Low Blood Pressure:
                <input checked={this.state.bloodpressure==="yes"} onChange={this.handleChangeRadio.bind(this, "bloodpressure")} type='radio' id='yes' name='pressure'/>
                <label htmlFor='yes'>Yes</label>

                <input checked={this.state.bloodpressure==="no"} onChange={this.handleChangeRadio.bind(this, "bloodpressure")} type='radio' id='no' name='pressure'/>
                <label htmlFor='no'>No</label><br/>
            </div>
            </p><br/>

            <p>Are you on any long-term perscription medications?
                <input checked={this.state.medications==="yes"} onChange={this.handleChangeRadio.bind(this, "medications")} type='radio' id='yes' name='medication'/>
                <label htmlFor='yes'>Yes</label>

                <input checked={this.state.medications==="no"} onChange={this.handleChangeRadio.bind(this, "medications")} type='radio' id='no' name='medication'/>
                <label htmlFor='no'>No</label><br/>
            </p><br/>

            <p>Why do you want to go to Mars?<br/>
                <textarea onChange={this.handleChangeText.bind(this, "mars")} style={{width:"99%", height:'300px'}} value={this.state.mars}></textarea>
            </p>

            <div className='submit'><button id='survey' onClick={this.submit}>Submit</button></div>

            </div>
        </section>
        )
    }
}
