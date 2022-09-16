import React from 'react';
import { Link } from 'react-router-dom';


const MOVIE_POSTER = 'https://image.tmdb.org/t/p/w500';

const Movie = ({ title, release_date, vote_average, overview, poster_path, id }) => (
    <div className='movie'>
        <img src={MOVIE_POSTER + poster_path} alt={title} />

        <div className='movie-data'>
            <h3>{title}</h3>
                
                <p>Rating: {vote_average}</p>
                <p>Release Date: {release_date}</p>
                {/* More info button/tag */}
                <Link to={`detail/${id}`} state={{title:title, release_date:release_date, vote_average:vote_average, overview:overview, poster_path:poster_path}}>
                <p>More Info</p>
                </Link>
                <div className='synopsis'>
                    <h2>Synopsis:</h2>
                    <p> {overview}</p>
                </div>

        </div>
    </div>
);

export default Movie;