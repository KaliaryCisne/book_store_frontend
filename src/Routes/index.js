import React from 'react';
import RegisterBook from '../pages/RegisterBook';
import EditBook from '../pages/EditBook';
import { Switch, Route } from 'react-router-dom';

import Home from './../pages/Home';

function Routes() {
    return (
        <Switch>
            <Route path='/' exact component= { Home } />
            <Route path='/books/create' exact component= { RegisterBook } />
            <Route path='/books/edit' exact component= { EditBook } />
        </Switch>
    );
}

export default Routes;
