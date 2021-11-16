import React from 'react';
import { Link } from 'react-router-dom';
import classes from'./Navigation.module.css';

const Navigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Logo</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meetups</Link>
                    </li>
                    <li>
                        <Link to="/new-meetups">New Meetups</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation
