import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegisterBook from '../pages/RegisterBook';
import EditBook from '../pages/EditBook';
=======
import { Switch, Route } from 'react-router-dom';
>>>>>>> feature/barra-navegacao

import Home from './../pages/Home';

function Routes() {
    return (
<<<<<<< HEAD
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component= { Home } />
                <Route path='/books/create' exact component= { RegisterBook } />
                <Route path='/books/edit' exact component= { EditBook } />
            </Switch>
        </BrowserRouter>
=======
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path='/books' component={FormBook} />
        </Switch>
>>>>>>> feature/barra-navegacao
    );
}

export default Routes;
