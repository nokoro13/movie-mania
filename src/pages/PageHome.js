// Page - Home
import React from 'react';
import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import AddFavourites from '../components/AddFavorites';
import { useParams } from 'react-router-dom'

const MOVIE_API = 'https://api.themoviedb.org/3/movie/popular?api_key=b7cd5f614d98fb5d0dfc566e1e09dbe8&sort_by=popularity.desc&release_date'





const PageHome = () => {
    
    const [movies, setMovies] = useState([]);
    
    const [param, setParam] = useState('popular');
    

    
    const [favs, setFavs] = useState( localStorage.getItem('MY_FAVOURITE_MOVIES') ===  null ? [] :  JSON.parse(localStorage.getItem('MY_FAVOURITE_MOVIES') ) );

    useEffect(() => {
        document.title = `Home`;
       fetch(`https://api.themoviedb.org/3/movie/${param}?api_key=b474f43311f1a19783cd84ac384af0e8`).then((res) => res.json()).then((data) => {
            console.log(data);
            setMovies(data.results.slice(0,12));
        })
    }, [param]);
    
    useEffect(() => {
        window.localStorage.setItem('MY_FAVOURITE_MOVIES', JSON.stringify(favs));
        console.log(favs);
    }, [favs]);


  
//add an if statement to make sure the movie is not already in the new array
//if (!favs.includes(movie)){
//}
    const addFavMovie = (movie) => {
        const newFavs = [...favs, movie];
        if (!favs.includes(movie)){
            setFavs(newFavs);
        }
        console.log(newFavs);   
    }

    return (
        
        <section className='page-heading'>
            <div className="button-wrapper">
            <button onClick={() => {
              setParam("popular");
            }}>Popular</button>
            <button onClick={() => {
              setParam("now_playing");
            }}>Now Playing</button>
            <button onClick={() => {
              setParam("upcoming");
            }}>Upcoming</button>
            <button onClick={() => {
              setParam("top_rated");
            }}>Top Rated</button>
            </div>
    
            <div className='movie-layout'>
                {movies.length > 0 && movies.map((movie) => (
                <Movie key={movie.id}  handleFavsClick={addFavMovie} favouriteComponent={AddFavourites} movie={movie} />
                ))}
            </div>

        </section>
    );

};

export default PageHome;