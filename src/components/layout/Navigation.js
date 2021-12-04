import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';
import FavoriteContext from '../../store/favorites-context';

const Navigation = () => {
    const favoriteCxt = useContext(FavoriteContext)
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
                        <Link to="/favorites">
                            Favorites
                            <span className={classes.badge}>{favoriteCxt.totalFavorites}</span>
                            </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation
