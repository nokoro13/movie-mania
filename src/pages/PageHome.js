// Page - Home
import React from 'react';
import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import AddFavourites from '../components/AddFavorites';

const MOVIE_API = 'https://api.themoviedb.org/3/discover/movie?api_key=b7cd5f614d98fb5d0dfc566e1e09dbe8&sort_by=popularity.desc&release_date'

const PageHome = () => {

    const [movies, setMovies] = useState([]);
    const [favs, setFavs] = useState([]);

    useEffect(() => {
		document.title = `Home`;
        fetch(MOVIE_API).then((res) => res.json()).then((data) => {
            console.log(data);
            setMovies(data.results.slice(0,12));
        })
	}, []);
    
    useEffect(() => {
        window.localStorage.setItem('MY_FAVOURITE_MOVIES', JSON.stringify(favs));
        console.log(favs);
    }, [favs]);


  
//add an if statement to make sure the movie is not already in the new array
    const addFavMovie = (movie) => {
        const newFavs = [...favs, movie];
        setFavs(newFavs);
    }

    return (
        
        <section className='page-heading'>
            <h2>Home Page</h2>
            <button>Popular</button>
            <button>Now Playing</button>
            <button>Upcoming</button>
            <button>Top Rated</button>
    
            <div className='movie-layout'>
                {movies.length > 0 && movies.map((movie) => (
                <Movie key={movie.id}  handleFavsClick={addFavMovie} favouriteComponent={AddFavourites} movie={movie} />
                ))}
            </div>

        </section>
    );

};

export default PageHome;