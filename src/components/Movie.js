import React from 'react';

const MOVIE_POSTER = 'https://image.tmdb.org/t/p/w500';

const Movie = ({ title, release_date, vote_average, overview, poster_path }) => (
    <div className='movie'>
        <img src={MOVIE_POSTER + poster_path} alt={title} />

        <div className='movie-data'>
            <h3 className='movie-title'>{title}</h3>
                
                <p>Rating: {vote_average}</p>
                <p>Release Date: {release_date}</p>
                
                <div className='synopsis'>
                    <h2>Synopsis:</h2>
                    <p> {overview}</p>
                </div>

        </div>
    </div>
);

export default Movie;