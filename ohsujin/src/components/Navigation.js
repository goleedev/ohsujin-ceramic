import React, { useState } from 'react'
import logo from '../images/logo.png';
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
 } from 'reactstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Navigation = ({ userObj }) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
    <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/" className="mr-auto">
                <img src={logo} alt="logo" className="logo"/>
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink href="/about">About Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/class">Class</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/store">Store</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/contact">Contact Us</NavLink>
                    </NavItem>
                    <div className="nav-login">
                        <NavItem>
                            <Link to="/login">Login</Link>
                            <Link to="/login">Join</Link>
                        </NavItem>                           
                    </div>    
                </Nav>
            </Collapse>
        </Navbar>
    </div>
    );
};

export default Navigation;
