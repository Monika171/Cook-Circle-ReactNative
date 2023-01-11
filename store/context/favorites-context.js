import {createContext, useState} from 'react';

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {

    },
    removeFavorite: (id) => {}
});

function FavoritesContextProvider({children}){
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    function addFavorite(id) {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFavorite() {
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id))
    }

    return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>

}

export default FavoritesContextProvider;