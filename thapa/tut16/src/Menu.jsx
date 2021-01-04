import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <>
        <NavLink exact activeClassName="active_class" to="/">About us</NavLink> 
        <NavLink exact activeClassName="active_class" to="/contact">Contact us</NavLink> 
        <NavLink exact activeClassName="active_class" to="/service">Service</NavLink>    
        <NavLink exact activeClassName="active_class" to="/user">User</NavLink>    
        <br />
        <a href = "/">AboutUs</a>
        <a href = "/contact">Contact</a>
        </>
    );
};

export default Menu;