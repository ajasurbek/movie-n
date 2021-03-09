import { Link } from 'react-router-dom' 
import './TvRecommendCard.scss'

const TvRecommendCard = ({id, title, date, imgLink, rating}) => {
    return (
        <>
        <Link to={`tvrecommend/${id}`} className="tv-recommend__card">
        <p className="tv-recommend__ranking">{rating}</p>
        <div className="img__holder">
        <img src={imgLink} alt="img" className="tv-recommend__img"/>
        </div>
        <h2 className="tv-recommend__title">{title}</h2>
        <h5 className="tv-recommend__date">{date}</h5>
        </Link>
        </>
    )
}

export default TvRecommendCard