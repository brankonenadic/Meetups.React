import { createContext, useState } from "react";


const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0
});

const FavoritesContextProvider = (props) => {
    const [userFavorites, setUserFavorites] = useState([]);

    const addFavoritesHandler = (favoriteMeetup) => {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    };

    const removeFavoritesHandler = () => {

    };

    const itemIsFavoriteHandler = () => {

    };

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length
    };

    return (
        <FavoriteContext.Provider value={context}>
            {props.children}
        </FavoriteContext.Provider>
    )
}

export default FavoritesContextProvider;
