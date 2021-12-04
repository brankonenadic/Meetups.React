import React, {useContext} from 'react';
import FavoriteContext from '../store/favorites-context';
import MeetupsList from '../components/meetups/MeetupsList';

const Favorites = () => {
    const favoriteCxt = useContext(FavoriteContext);
    let content;
    if (favoriteCxt.totalFavorites === 0) {
        content = <p>You do't have favorites yet. Start adding some.</p>;
    } else {
            
            content = <MeetupsList meetups={favoriteCxt.favorites}/>;
    }
    return (
        <section>
            <h1>My favorites</h1>
            {content}
        </section>
    )
}

export default Favorites
