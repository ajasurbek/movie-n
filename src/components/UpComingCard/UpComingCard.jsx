import { Link } from 'react-router-dom'
import './UpComingCard.scss'

const UpComingCard = ({id, title, date, ranking, imgLink}) => {
    return (
        <>
        <Link to={`/upcoming/${id}`} className="up-coming__card">
        <span className="up-coming__ranking">{ranking}</span>
        <div className="img__holder">
        <img src={imgLink} alt="img" className="up-coming__img"/>
        </div>
        <h5 className="up-coming__title">{title}</h5>
        <p className="up-coming__date">{date}</p>
        </Link>
        </>
        
        )
    }
    export default UpComingCard