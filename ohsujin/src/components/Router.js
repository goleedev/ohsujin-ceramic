import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from 'routes/Home';
import About from 'routes/About';
import Class from 'routes/Class';
import Shop from 'routes/Shop';
import Contact from 'routes/Contact';
import Admin from 'routes/Admin';
import Auth from 'routes/Auth';

const AppRouter = ({ isLoggedIn }) => {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route exact path="/">
                    <Home />   
                </Route>
                <Route exact path="/login">
                    {isLoggedIn ? <Home /> : <Auth /> }  
                </Route>
                <Route exact path="/about">
                    <About />   
                </Route>
                <Route exact path="/class">
                    <Class />   
                </Route>
                <Route exact path="/shop">
                    <Shop />   
                </Route>
                <Route exact path="/contact">
                    <Contact />   
                </Route>
                <Route exact path="/admin">
                    <Admin />   
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter;
