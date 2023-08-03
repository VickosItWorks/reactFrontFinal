import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Usercontainer = styled.div`
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        background-color: #fff;
        border: 1px solid #ccc;
        margin-top: 100px;
    `

const User = () => {
    const navigate = useNavigate();


    const [dataFavs, setDataFavs] = useState(null);
   
    const [dataWatch, setDataWatch] = useState(null);

    const [userId, setUserId] = useState('');

    useEffect(()=> {
        const uId = JSON.parse(sessionStorage.getItem('isLogged')).id;
        setUserId(uId);
    })

    useEffect(() => {
        if(!userId) return;
        const listaFavoritos = JSON.parse(sessionStorage.getItem(userId)).userFavorites
        console.log('ATRODEN');

        Promise.all(listaFavoritos.map(async (favorito) => {
            return fetch(`https://www.omdbapi.com/?apikey=9b5184a7&i=${favorito}`)
                .then((response) => response.json())
        })).then(response => {
            console.log(response)
            setDataFavs(response);
        })
    }, [userId])

    console.log('AFUERA');

    useEffect(() => {
        if(!userId) return;
        const listaWatch = JSON.parse(sessionStorage.getItem(userId)).userWatchList

        Promise.all(listaWatch.map(async (toWatch) => {
            return fetch(`https://www.omdbapi.com/?apikey=9b5184a7&i=${toWatch}`)
                .then((response) => response.json())
        })).then(response => {
            console.log(response)
            setDataWatch(response)
        })
    }, [userId])

    return (<div className="container">
        <h1>Welcome Back User</h1>
{/* 
        <div class="movie-section">
            <h2>Favorite Movies</h2>
            <div id="favorite-movies-list" class="movie-list">

                <div class="movie" key="1">
                    <div class="image">
                        <img src="https://via.placeholder.com/250x350?text=Movie+1" alt="Movie Poster 1" />
                    </div>
                    <div class="details">
                        <h2 class="title">Movie Title 1</h2>
                        <div class="extra-info">
                            <span class="year">Year 1</span>
                            <span class="titletype">Movie Type 1</span>
                        </div>
                    </div>
                </div>

                <div class="movie" key="2">
                    <div class="image">
                        <img src="https://via.placeholder.com/250x350?text=Movie+1" alt="Movie Poster 2" />
                    </div>
                    <div class="details">
                        <h2 class="title">Movie Title 2</h2>
                        <div class="extra-info">
                            <span class="year">Year 2</span>
                            <span class="titletype">Movie Type 2</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="movie-section">
            <h2>Movies to Watch</h2>
            <div id="movies-to-watch-list" class="movie-list">
                <div class="movie" key="3">
                    <div class="image">
                        <img src="https://via.placeholder.com/250x350?text=Movie+1" alt="Movie Poster 3" />
                    </div>
                    <div class="details">
                        <h2 class="title">Movie Title 3</h2>
                        <div class="extra-info">
                            <span class="year">Year 3</span>
                            <span class="titletype">Movie Type 3</span>
                        </div>
                    </div>
                </div>

                <div class="movie" key="4">
                    <div class="image">
                        <img src="https://via.placeholder.com/250x350?text=Movie+1" alt="Movie Poster 4" />
                    </div>
                    <div class="details">
                        <h2 class="title">Movie Title 4</h2>
                        <div class="extra-info">
                            <span class="year">Year 4</span>
                            <span class="titletype">Movie Type 4</span>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

    </div>)
}

export default User;