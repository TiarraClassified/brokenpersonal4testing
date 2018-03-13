import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Profile from '../components/Profile';
import Survey from '../components/Survey';
import Charts from '../components/usercomps/Charts';

export default function Userroutes (){
    return(
        <Switch>
            <Route path='/profile' component={Profile}/>
            <Route path='/survey' component={Survey}/>
            <Route path='/charts' component={Charts}/>
        </Switch>
    )
}