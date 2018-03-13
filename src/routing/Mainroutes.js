import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Why from '../components/Why';
import Possibility from '../components/Possibility';
import BFR from '../components/BFR';
import Day from '../components/aframes/day';
import Evening from '../components/aframes/evening';


export default function Mainroutes (){
    return(
                <Switch>
                    <Route path='/day' component={Day}/>
                    <Route path='/evening' component={Evening}/>
                    <Route path='/mars/rockets' component={BFR}/>
                    <Route path='/mars/possibility' component={Possibility}/>
                    <Route path='/mars/why' component={Why}/>
                    <Route path='/mars/login' component={Login}/>
                    <Route path='/mars' component={Home}/>
                </Switch>

    )
}
