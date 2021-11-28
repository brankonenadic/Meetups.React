import { createContext } from "react";


const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0
});

const FavoritesContextProvider = (props) => {
const context = {};

    return (
        <FavoriteContext.Provider value={context}>
            {props.children}
        </FavoriteContext.Provider>
    )
}

export default FavoritesContextProvider;
