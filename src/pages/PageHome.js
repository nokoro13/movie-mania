// Page - Home
import React from 'react';
import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import AddFavourites from '../components/AddFavorites';

const MOVIE_API = 'https://api.themoviedb.org/3/discover/movie?api_key=b7cd5f614d98fb5d0dfc566e1e09dbe8&sort_by=popularity.desc&release_date'

const PageHome = () => {

    const [movies, setMovies] = useState([]);
    const [favs, setFavs] = useState( localStorage.getItem('MY_FAVOURITE_MOVIES') ===  null ? [] :  JSON.parse(localStorage.getItem('MY_FAVOURITE_MOVIES') ) );
    const [favIds] = useState(favs.map((fav) => fav.id));

    //favs.map((fav) => fav.id)

    useEffect(() => {
		document.title = `Home`;
        fetch(MOVIE_API).then((res) => res.json()).then((data) => {
            console.log(data);
            setMovies(data.results.slice(0,12));
        })
	}, []);

   useEffect(()=> {
    window.localStorage.setItem('MY_ICONS', JSON.stringify(favIds));
    console.log(favIds);
   });
    
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
        
    }

    return (
        
        <section className='page-heading'>
            <h2>Home Page</h2>
            <p>Here Are Some Movies</p>
    
            <div className='movie-layout'>
                {movies.length > 0 && movies.map((movie) => (
                <Movie key={movie.id} isLiked={favIds.includes(movie.id) ? true : false} handleFavsClick={addFavMovie} favouriteComponent={AddFavourites} movie={movie} />
                ))}
            </div>

        </section>
    );

};

export default PageHome;