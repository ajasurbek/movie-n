import { Link } from 'react-router-dom'
import './TvShows.scss'

const TvCard = ({id, title, date, ranking, imgLink}) => {
    return (
        <>
        <Link to={`/tvshow/${id}`} className="tv__card">
        <span className="tv__ranking">{ranking}</span>
        <div className="img__holder">
        <img src={imgLink} alt="img" className="tv__img"/>
        </div>
        <h5 className="tv__title">{title}</h5>
        <p className="tv__date">{date}</p>
       
        </Link>
        </> 
        )
    }
    export default TvCard