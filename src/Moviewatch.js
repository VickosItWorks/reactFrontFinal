import React from "react";
//import './Moviewatch.css';
import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Moviewatch = ({name}) => {
    const [movies, setMovies] = useState("");
    const [selectedMovie, setSelectedMovie] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=9b5184a7&s=${name}`)
        .then((response) => response.json())
        .then((data) => {
            setMovies(data.Search);
        })
    }, [name])

    if(!movies){
        return <p>No movies to watch yet..</p>
    }

    const handleMovieClick = (movieID) => {
        if(selectedMovie === movieID){
            setSelectedMovie(null)
        } else {
            setSelectedMovie(movieID)
            navigate('/movie/'+movieID);
        }
      };
    
    return (<div className="Moviewatchclass">
        {movies && movies.map((eachMovie) => {
            return (<div className="movie" key={eachMovie.imdbID} onClick={() => handleMovieClick(eachMovie.imdbID)}>
            <div className="image">
                <img src={eachMovie.Poster} alt=""/>
            </div>
            <div className="details">
                <h2 className="title">{eachMovie.Title}</h2>
                <div className="extra-info">
                    <span className="year">{eachMovie.Year}</span>
                    <span className="titletype">{eachMovie.Type}</span>
                </div>
                {selectedMovie === eachMovie.imdbID && <Outlet/>}
            </div>
        </div>)
        })}

    </div>)
}

export default Moviewatch;