import { Link } from 'react-router-dom' 
import './RecommendCard.scss'

const RecommendCard = ({id, title, date, imgLink, rating}) => {
    return (
        <>
        <Link to={`recommend/${id}`} className="recommend__card">
        <p className="recommend__ranking">{rating}</p>
        <div className="img__holder">
        <img src={imgLink} alt="img" className="recommend__img"/>
        </div>
        <h2 className="recommend__title">{title}</h2>
        <h5 className="recommend__date">{date}</h5>
        </Link>
        </>
    )
}

export default RecommendCard