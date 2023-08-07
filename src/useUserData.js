import { useEffect, useState } from "react";

export const useUserData = () => {
    const [favorites, setFavorites] = useState([]);
    const [watchList, setWatchList] = useState([]);
    const [userId, setUserId] = useState('');

    useEffect(() => {
        const uId = JSON.parse(sessionStorage.getItem('isLogged')).id;
        const data = JSON.parse(sessionStorage.getItem(uId));
        setUserId(uId);
        setFavorites(data.userFavorites);
        setWatchList(data.userWatchList);
    }, []);

    const updateFavorites = (movieId) => {
        if (favorites.includes(movieId)) {
            setFavorites(favorites.filter((id) => id !== movieId));
        } else {
            setFavorites([...favorites, movieId]);
        }
    };

    const updateWatchList = (movieId) => {
        if (watchList.includes(movieId)) {
            setWatchList(watchList.filter((id) => id !== movieId));
        } else {
            setWatchList([...watchList, movieId]);
        }
    };

    useEffect(() => {
        if (!userId) return;

        sessionStorage.setItem(userId, JSON.stringify({
            userFavorites: favorites,
            userWatchList: watchList
        }));
    }, [favorites, watchList]);

    return { favorites, watchList, updateFavorites, updateWatchList, userId };
}