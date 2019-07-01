import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import logo from '../../logo.png';

const Menu = () => (

    <div className="menu">
        <nav>
            <ul>
                <li>
                    <img src={logo} className="App-logo" alt="logo" />
                </li>
                <li>
                    <a href="/">Page 1</a>
                </li>
                <li>
                <a href="/two">Page 1</a>
                </li>
            </ul>
        </nav>
    </div>
);

export default Menu;