import { createContext, useState } from "react";


const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => { },
    removeFavorite: (meetupId) => { },
    itemIsFavorite: (meetupId) => { },
});

export const FavoritesContextProvider = (props) => {
    const [userFavorites, setUserFavorites] = useState([]);

    const addFavoritesHandler = (favoriteMeetup) => {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    };

    const removeFavoritesHandler = (meetupId) => {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    };

    const itemIsFavoriteHandler = (meetupId) => {
        return userFavorites.some(meetup => meetup.id === meetupId);
    };

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoritesHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return (
        <FavoriteContext.Provider value={context}>
            {props.children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContext;
