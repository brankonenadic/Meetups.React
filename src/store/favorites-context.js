import { createContext, useState } from "react";


const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0
});

const FavoritesContextProvider = (props) => {
    const [userFavorites, setUserFavorites] = useState([]);
    const context = {};

    return (
        <FavoriteContext.Provider value={context}>
            {props.children}
        </FavoriteContext.Provider>
    )
}

export default FavoritesContextProvider;
