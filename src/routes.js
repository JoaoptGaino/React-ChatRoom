import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/index';
import ChatRoom from './Pages/ChatRoom/index';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/:roomId" component={ChatRoom}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;