import React, { useEffect, useState } from "react";
// import './Login.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Expandmovie.css';
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { useUserData } from "./useUserData";

const Boton = styled.button`
    border: none;
    background-color: #370b5a;
    cursor: pointer;
    
    margin-right: 10px;
    padding: 10px;
    border: none;
    border-radius: 4px;
    color: white;
`;

const ExpandedElements = styled.div.attrs({ className: 'expanded-info' })`
  background-color: #f5f5f5;
  padding: 10px;
`;

const Expandmovie = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const params = useParams();
  const { favorites, updateFavorites, watchList, updateWatchList } = useUserData(movieDetails);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=9b5184a7&i=${params.imdbID}`)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
      })
  }, [params.imdbID])

  if (!movieDetails) {
    return 'loading....';
  }

  const { Rated, Runtime, Genre, Director, Writer, Actors, Plot, Language, Awards } = movieDetails;

  const heartIcon = favorites.includes(movieDetails.imdbID) ? 'bi bi-bookmark-heart-fill' : 'bi bi-bookmark-heart';
  const plusIcon = watchList.includes(movieDetails.imdbID) ? 'bi bi-bookmark-plus-fill' : 'bi bi-bookmark-plus';

  return (
    <ExpandedElements className="expanded-info" onClick={(e) => e.stopPropagation()}>
      <p className="description">Rated: {Rated}</p>
      <p className="description">Runtime: {Runtime}</p>
      <p className="description">Genre: {Genre}</p>
      <p className="description">Actors: {Actors}</p>
      <p className="description">Language: {Language}</p>
      <p className="description">Awards: {Awards}</p>
      <p className="description">Director: {Director}</p>
      <p className="description">Writer: {Writer}</p>
      <p className="description">Plot: {Plot}</p>
      <div className="buttons">
        <Boton className="heart-button" onClick={() => updateFavorites(movieDetails.imdbID)}>
          <i className={heartIcon}></i>
        </Boton>
        <Boton className="plus-button" onClick={() => updateWatchList(movieDetails.imdbID)}>
          <i className={plusIcon}></i>
        </Boton>
      </div>
    </ExpandedElements>
  );
}

export default Expandmovie;