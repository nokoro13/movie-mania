// Page - Home
import React from 'react';
import { useEffect, useState } from 'react';

import Movie from '../components/Movie';

const MOVIE_API = 'https://api.themoviedb.org/3/discover/movie?api_key=b7cd5f614d98fb5d0dfc566e1e09dbe8&sort_by=popularity.desc&release_date'

const PageHome = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
		document.title = `Home`;
        fetch(MOVIE_API).then((res) => res.json()).then((data) => {
            console.log(data);
            setMovies(data.results.slice(0,12));
            
        })
	}, []);

    

    return (
        
        <section>
            <h2>Home Page</h2>
            <p>Here Are Some Movies</p>
            <div className='toggle-home-movies-cat'>
                <button>Popular</button>
                <button>Best Rated</button>
                <button>Now Playing</button>
                <button>Coming Soon</button>
            </div>

            <div className='movie-layout'>
                {movies.length > 0 && movies.map((movie) => (
                <Movie key={movie.id} {...movie}/>
                ))}
            </div>
        </section>
    );

};

export default PageHome;