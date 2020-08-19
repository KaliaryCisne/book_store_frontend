import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FormBook  from '../pages/FormBook';
import Home from './../pages/Home';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path='/books' component={FormBook} />
        </Switch>
    );
}

export default Routes;