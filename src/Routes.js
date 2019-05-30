import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './container/Home.js';
import Signup from './container/SignupPage.js'

export default () => 
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/sign-up' component={ Signup } />
    </Switch>