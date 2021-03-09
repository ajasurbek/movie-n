import { Link } from 'react-router-dom'
import './TopRatedCard.scss'

const TopRatedCard = ({id, nomi, ranking, vaqti, imgLink}) => {
  return (
    <>
    <Link to={`./latestMovie/${id}`} className="rated__card">
    <span className="rated__ranking">{ranking}</span>
    <div className="img__holder">
    <img src={imgLink} alt="img" className="rated__img"/>
    </div>
    <h2 className="rated__title">{nomi}</h2>
    <h5 className="rated__date">{vaqti}</h5>
    </Link>
    </>
    )
  }
  export default TopRatedCard