import React from 'react'
import { Switch, Route } from "react-router-dom";

import Home from '../pages/Home/home'
import Projeto from '../pages/Projeto/projeto'


const Routes = function () {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/projetos' component={Projeto} />
        </Switch>
    )
}

export default Routes;

