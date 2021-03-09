import { Link } from 'react-router-dom'
import './MovieCard.scss'

const MovieCard = ({id, title, imgLink, rating, releaseDate}) => {
    return (
        <>
       <Link to={`./movie/${id}`} className="movie__card">
        <p className="card__ranking">{rating}</p>
        <div className="img__holder">
        <img src={imgLink} alt="img" className="card__img"/>
        </div>
        <h2 className="card__title color">{title}</h2>
        <h5 className="card__date color">{releaseDate}</h5>
        </Link>
        </>
        )
    }
    export default MovieCard