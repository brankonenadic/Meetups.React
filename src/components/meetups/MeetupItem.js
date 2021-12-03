import React, { useContext } from 'react';
import classes from './MeetupsItem.module.css';
import Card from '../ui/Card';
import FavoriteContext from '../../store/favorites-context';

const MeetupItem = (props) => {
    const favoriteCxt = useContext(FavoriteContext);
    const itemsFavorite = favoriteCxt.itemIsFavorite(props.id);

    const toggleFaborteHandler = () => {
        if (itemsFavorite) {
            favoriteCxt.removeFavorite(props.id);
        } else {
            favoriteCxt.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description
            });
        }
    };

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h2>{props.title}</h2>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFaborteHandler}>{itemsFavorite ? 'Remove from favorite' : 'To favorite'}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem
