import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NewPhoto from './pages/NewPhoto';
import Feed from './pages/Feed';

function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Feed}/> 
            <Route path='/newphoto' component={NewPhoto}/>
        </Switch>
    );
}

export default Routes;

//<Route path='/' exact component/> o *exact* evita que essa página sempre seja acessada quando estiver em outras rotas