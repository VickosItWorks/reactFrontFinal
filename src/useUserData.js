import { useEffect, useState } from "react";

export const useUserData = () => {
    const [favorites, setFavorites] = useState([]);
    const [watchList, setWatchList] = useState([]);
    const [userId, setUserId] = useState('');

    useEffect(() => {
        const uId = JSON.parse(sessionStorage.getItem('isLogged')).id;
        const data = JSON.parse(sessionStorage.getItem(uId));
        setUserId(uId);
        if (data.userFavorites) {
            setFavorites(data.userFavorites);
        }
        if (data.watchList) {
            setWatchList(data.userWatchlist);
        }
    }, []);
    return { favorites, watchList, userId };
}