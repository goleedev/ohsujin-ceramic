import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from 'routes/Home';
import About from 'routes/About';
import Class from 'routes/Class';
import Store from 'routes/Store';
import Contact from 'routes/Contact';
import Auth from 'routes/Auth';
import Profile from 'routes/Profile';
import Cart from 'routes/Cart';
import NotFound from 'routes/NotFound';
import ScrollToTop from 'components/ScrollToTop';
import Footer from './Footer';

const AppRouter = ({ userObj, isLoggedIn }) => {
    return (
        <Router>
            <Navigation userObj={userObj}/>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/login" component={Auth} /> */}
                {/* <Route exact path="/profile" component={Profile} /> */}
                <Route exact path="/about" component={About} />
                <Route exact path="/class" component={Class} />
                {/* <Route exact path="/store" component={Store} />  */}
                {/* <Route exact path="/store/:id" component={Store} /> 
                <Route path="/cart/:id" component={Cart} /> */}
                <Route exact path="/contact" component={Contact} />
                <Route component={NotFound} />
            </Switch>
            <ScrollToTop />
            <Footer />
        </Router>
    )
}

export default AppRouter;
