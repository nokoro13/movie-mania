import {useLocation} from 'react-router-dom';
const MOVIE_POSTER = 'https://image.tmdb.org/t/p/w500';

export const PageDetail = () => {
    let location = useLocation();
     const {title} = location.state;
     const {poster_path} = location.state;
     const {vote_average} = location.state;
     const {release_date} = location.state;
     const {overview} = location.state;
     return(
        <div class="detail-wrapper">
            <img class="detail-poster" src={MOVIE_POSTER + poster_path} alt={title} />
            <div class="detail-content">
               <h2>{title}</h2>
               <p>Rating: {vote_average}</p>
               <p>Release Date: {release_date}</p>
               <p>{overview}</p>
            </div>
        </div>
     );                                              
};

