import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => <nav>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/login">login</Link>
        </li>
        <li>
            <Link to="/about">About Us</Link>
        </li>
        <li>
            <Link to="/class">Class</Link>
        </li>
        <li>
            <Link to="/shop">Shop</Link>
        </li>
        <li>
            <Link to="/contact">Contact Us</Link>
        </li>
    </ul>
</nav>;

export default Navigation;
