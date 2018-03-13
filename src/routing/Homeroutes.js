import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Rocket from '../parallaxtesting/Rocket';
import Stars from '../components/Stars';


export default function Homeroutes (){
    return(
        <Switch>
            <Route exact path='/' component={Rocket}/>
            <Route path='/stars' component={Stars}/>
        </Switch>
    )
}