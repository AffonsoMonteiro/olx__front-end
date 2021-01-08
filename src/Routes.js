import React from 'react';
import { Switch } from 'react-router-dom';

import RouteHandler from './components/RouteHandler'

import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import AdPage from './pages/AdPage'
import AddAd from './pages/AddAd'
import MyAccount from './pages/MyAccount'
import Ads from './pages/Ads'
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

            <RouteHandler private path="/my-account">
                <MyAccount />
            </RouteHandler>

            <RouteHandler private path="/post-an-ad">
                <AddAd />
            </RouteHandler>

            <RouteHandler path="/ads">
                <Ads />
            </RouteHandler>

            <RouteHandler>
                <NotFound />
            </RouteHandler>
        </Switch>
    )
}