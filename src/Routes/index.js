import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegisterBook from '../pages/RegisterBook';
import EditBook from '../pages/EditBook';

import Home from './../pages/Home';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component= { Home } />
                <Route path='/books/create' exact component= { RegisterBook } />
                <Route path='/books/edit' exact component= { EditBook } />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
