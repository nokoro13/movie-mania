import React from 'react';
import { useEffect, useState } from 'react';
import AddFavourites from '../components/AddFavorites';


const PageFavorites = () => {

    const [favMov, setFavMov] = useState([]);


const MOVIE_POSTER = 'https://image.tmdb.org/t/p/w500';
    
    useEffect(() => {
		document.title = `Favorites`;
        const favMov = JSON.parse(localStorage.getItem('MY_FAVOURITE_MOVIES'));
        console.log(favMov);
        setFavMov(favMov);
	}, []);

    return (
        
        <section className='page-heading'>
            <h2>Favorites Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quod quia recusandae sit eveniet reprehenderit aliquid fugiat nesciunt incidunt praesentium sint explicabo modi, ullam expedita a autem ratione, exercitationem consequuntur.</p>
            <div >
                <div className='movie-layout'>
                    {favMov.map(fav => 
                       <div key={fav.id} className='movie'>
                           {<img src={MOVIE_POSTER + fav.poster_path} alt={fav.title} />}
                           <div className='movie-data'>
                            {<h3 className='movie-title'>{fav.title}</h3>}
                            {<p>Rating: {fav.vote_average}</p>}
                            {<p>Release Date: {fav.release_date}</p>} 
                            <div className='synopsis' >
                                <i className='heart-icon' >{<AddFavourites/>}</i>
                                <h2>Synopsis:</h2>
                                <p> {fav.overview}</p>
                            </div>
                           </div>
                       </div>
                    )}
                </div>
            </div>
        </section>
    )

}

export default PageFavorites;