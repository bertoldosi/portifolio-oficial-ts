import React from 'react'
import { HashRouter, Route } from "react-router-dom";

import Home from '../pages/Home/home'
import Login from '../pages/Login/login';
import Projeto from '../pages/Projeto/projeto'


const Routes = function () {
    return (
        <HashRouter>
            <Route exact path='/' component={Home} />
            <Route path='/projetos' component={Projeto} />
            <Route path='/login' component={Login} />
        </HashRouter>
    )
}

export default Routes;

