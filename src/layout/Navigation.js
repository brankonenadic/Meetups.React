import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <header>
            <div>
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
            </div>
        </header>
    )
}

export default Navigation
