import React from 'react';
import { Link } from 'react-router-dom';
import AddFavourites from './AddFavorites';


const MOVIE_POSTER = 'https://image.tmdb.org/t/p/w500';


const Movie = (props) => {
    
    const FavouriteComponent = props.favouriteComponent;
    const movieInfo = props.movie;
    const heartIcons = props.isLiked;
    
    return (
    <div className='movie'>
        <img src={MOVIE_POSTER + movieInfo.poster_path} alt={movieInfo.title} />

        <div className='movie-data'>
            <h3 className='movie-title'>{movieInfo.title}</h3>
                
                
                <p>Rating: {movieInfo.vote_average}</p>
                <p>Release Date: {movieInfo.release_date}</p>
                
                <div className='synopsis' >

                    <i className={heartIcons === true ? 'heart-fill':'heart-nofill'} onClick={()=>props.handleFavsClick(movieInfo)}><FavouriteComponent  favouriteComponent={AddFavourites}/></i>
                    <Link to={`detail/${movieInfo.id}`} state={{title:movieInfo.title, release_date:movieInfo.release_date, vote_average:movieInfo.vote_average, overview:movieInfo.overview, poster_path:movieInfo.poster_path}}>
                <p>More Info</p>
                </Link>

                    <h2>Synopsis:</h2>
                    <p> {movieInfo.overview}</p>
                    <Link className="more-info" to={`detail/${movieInfo.id}`} state={{title:movieInfo.title, release_date:movieInfo.release_date, vote_average:movieInfo.vote_average, overview:movieInfo.overview, poster_path:movieInfo.poster_path}}>
                <p>More Info...</p>
                </Link>
                </div>

        </div>
    </div>
)};

export default Movie;