import React from 'react';
import { Switch } from 'react-router-dom';

import RouteHandler from './components/RouteHandler'

import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import AdPage from './pages/AdPage'
import AddAd from './pages/AddAd'
import NotFound from './pages/NotFound'

export default () => {
    return (
        <Switch>
            <RouteHandler exact path="/">
                <Home />
            </RouteHandler>

            <RouteHandler path="/about">
                <About />
            </RouteHandler>

            <RouteHandler path="/signin">
                <SignIn />
            </RouteHandler>

            <RouteHandler path="/signup">
                <SignUp />
            </RouteHandler>
            
            <RouteHandler path="/ad/:id">
                <AdPage />
            </RouteHandler>

            <RouteHandler private path="/post-an-ad">
                <AddAd />
            </RouteHandler>

            <RouteHandler>
                <NotFound />
            </RouteHandler>
        </Switch>
    )
}