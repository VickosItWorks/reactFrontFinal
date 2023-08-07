import React from "react";
import './Home.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Moviewatch from "./Moviewatch";
import { styled } from "styled-components";

const Largebutton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #194261;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    `

const Home = () => {
    const [movieName, setMovieName] = useState('');
    const navigate = useNavigate();

    //sessionStorage.clear();

    const movieValue = (event) => {
        event.preventDefault();
        const isUserLogged = JSON.parse(sessionStorage.getItem('isLogged'));

        if (isUserLogged?.logged) {
            const inputName = document.getElementById("search");
            setMovieName(inputName.value);
        } else {
            navigate('/login');
        }
    }

    return (<div className="homeclass">
        <h1>Movie Database</h1>

        <div className="buttons-container">
            <button className="nav-button" onClick={() => navigate('/user')}>
                <i class="bi bi-person-fill"></i>
            </button>
            <button className="nav-button" onClick={() => navigate('/login')}>Login</button>
        </div>

        <form className="search-form">
            <input type="text" id="search" name="search" placeholder="Search movies..." />
            <Largebutton onClick={movieValue} type="submit">Search</Largebutton>
        </form>

        <Moviewatch name={movieName} />

    </div>)
}

export default Home;