import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FormBook  from '../pages/FormBook';
import Home from './../pages/Home';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path='/books' component={FormBook} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;