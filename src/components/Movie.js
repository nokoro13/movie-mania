import React from 'react';
import AddFavourites from './AddFavorites';

const MOVIE_POSTER = 'https://image.tmdb.org/t/p/w500';


const Movie = (props) => {
    
    const FavouriteComponent = props.favouriteComponent;
    
    return (
    <div className='movie'>
        <img src={MOVIE_POSTER + props.poster_path} alt={props.title} />

        <div className='movie-data'>
            <h3 className='movie-title'>{props.title}</h3>
                
                <p>Rating: {props.vote_average}</p>
                <p>Release Date: {props.release_date}</p>
                
                <div className='synopsis' >
                    <i className='heart-icon' onClick={()=>props.handleFavsClick(props)}><FavouriteComponent  favouriteComponent={AddFavourites}/></i>
                    <h2>Synopsis:</h2>
                    <p> {props.overview}</p>
                </div>

        </div>
    </div>
)};

export default Movie;