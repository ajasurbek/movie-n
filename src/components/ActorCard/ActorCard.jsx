import { Link } from 'react-router-dom' 
import './ActorCard.scss'

const ActorCard = ({id, name, imgLink}) => {
    return (
        <>
        <Link to={`actor/${id}`} className="actor__card">
            <img className='actor__img' src={imgLink} alt="rasm"/>
            <h5 className="name">{name}</h5>
        </Link>
        </>
    )
}

export default ActorCard