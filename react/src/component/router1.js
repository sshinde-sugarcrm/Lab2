import React, {Component} from 'react';
import {Route,Router, Switch} from 'react-router-dom';
import login from "./login";
import Signup from "./Signup";
import Home from "./Home";
import postproject from "./postproject";
import profile from "./profile";

import bids from "./bids";
import myproject from "./myproject";
import history from "./history";
import update from "./update";
import dashboard from "./dashboard";
import myprofile from "./myprofile";
import relevant from "./relevant";
import allproject from "./allproject";

import payment from "./Payment";
import freelancerbal from "./freelancerbal";
import projbidon from "./projbidon";
import projbyyou from "./projbyyou";
import details from "./details";
import projectdetails from "./projectdetails";
import listbids from "./listbids";
class router1 extends Component {
    render() {
        return (
            <Router history={history}>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route  path='/login' component={login}/>
                <Route  path='/signup' component={Signup}/>
                <Route  path='/profile' component={profile}/>
                <Route path='/postproject' component={postproject}/>
                <Route path='/myproject' component={myproject}/>
                <Route  path='/dashboard' component={dashboard}/>
                <Route  path='/bids' component={bids}/>
                <Route  path='/update' component={update}/>
                <Route  path='/myprofile' component={myprofile}/>
                <Route  path='/relevant' component={relevant}/>
                <Route  path='/allproject' component={allproject}/>
                <Route  path='/Payment' component={payment}/>
                <Route  path='/freelancerbal' component={freelancerbal}/>
                <Route  path='/projbidon' component={projbidon}/>
                <Route  path='/projbyyou' component={projbyyou}/>
                <Route  path='/details' component={details}/>
                <Route  path='/projectdetails' component={projectdetails}/>
                <Route  path='/listbids' component={listbids}/>
            </Switch>
            </Router>
        );

    }
}
export default router1;