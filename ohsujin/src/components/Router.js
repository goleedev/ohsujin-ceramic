import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from 'routes/Home';
import About from 'routes/About';
import Class from 'routes/Class';
import Store from 'routes/Store';
import Contact from 'routes/Contact';
import Admin from 'routes/Admin';
import Auth from 'routes/Auth';
import Footer from './Footer';

const AppRouter = ({ userObj, isLoggedIn }) => {
    return (
        <Router>
            <Navigation userObj={userObj}/>
            <Switch>
                <Route exact path="/">
                    <Home />   
                </Route>
                <Route exact path="/login">
                    <Auth />
                </Route>
                <Route exact path="/about">
                    <About />   
                </Route>
                <Route exact path="/class">
                    <Class />   
                </Route>
                <Route exact path="/store">
                    <Store />   
                </Route>
                <Route exact path="/contact">
                    <Contact userObj={userObj}/>   
                </Route>
                <Route exact path="/admin">
                    <Admin />   
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter;
