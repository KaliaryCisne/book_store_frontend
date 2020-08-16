import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FormBook  from '../pages/FormBook';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/books' component= { FormBook } />
                {/* <Route path='/books' render={(props) => <FormBook {...props} title="Titulo teste" buttonName="Salvar" /> } /> */}
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
