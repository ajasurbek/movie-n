import { useState, useEffect } from 'react'
import axios from 'axios'

import './SingleMovie.scss'
import ActorCard from '../components/ActorCard'
import RecommendCard from '../components/RecommendCard'

const SingleMovie = ({ match }) => {
    
    const [movieInfo, setMovieInfo] = useState({
        isFetched: false,
        data: {},
        error: null
    })
    
    
    const [actorsInfo, setActorsInfo] = useState({
        isFetched: false,
        data: {},
        error: null
    })
    
    
    const [recommendInfo, setRecommendInfo] = useState({
        isFetched: false,
        data: {},
        error: null
    })
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}`, {
        params: {
            api_key: '5a7f563cfd45b94e412aa8504472de5c'
        }
    })
    .then(function (response) {
        setMovieInfo({
            isFetched: true,
            data: response.data,
            error: false,
        })
    })
    .catch(function (error) {
        setMovieInfo({
            isFetched: true,
            data: [],
            error: error,
        }) 
    }) 
    
    
    
    axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}/credits`, {
    params: {
        api_key: '5a7f563cfd45b94e412aa8504472de5c'
    }
})
.then(function (response) {
    console.log(response);
    setActorsInfo({
        isFetched: true,
        data: response.data,
        error: false,
    })
})
.catch(function (error) {
    setActorsInfo({
        isFetched: true,
        data: [],
        error: error,
    }) 
}) 





axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}/recommendations`, {
params: {
    api_key: '5a7f563cfd45b94e412aa8504472de5c'
}
})
.then(function (response) {
    console.log(response);
    setRecommendInfo({
        isFetched: true,
        data: response.data,
        error: false,
    })
})
.catch(function (error) {
    setRecommendInfo({
        isFetched: true,
        data: [],
        error: error,
    }) 
}) 





}, [])

const movieData = movieInfo.data
const actorData = actorsInfo.data.cast


console.log(actorData)

return (
    <> 
    <div className="container">
    {
        movieInfo.isFetched && actorsInfo.isFetched && recommendInfo.isFetched ? (
            <div className="movie__info">
            <h2 className='info__title'> {movieData.original_title} </h2>
            <div className="info__wrapper">
            <div className="info__details">
            <h4 className='info__overview'>Language: {movieData.original_language}</h4>
            <h4 className='info__overview'>Realease date: {movieData.release_date}</h4>
            <h4 className='info__overview'>Runtime: {movieData.runtime}</h4>
            {
                movieData.genres.map ((genre, index) => (
                    <button className='info__btn' key={index} >{genre.name}</button>
                    ) )
                }
            </div>
            <div className="info__overview-holder">
            <p className='info__overview'> {movieData.overview} </p>
            <a className='info__link' href={movieData.homepage} target='blank'>Official site</a>
            </div>
            </div>
            
            
           
                
                <h3 className='actor__title'>Actors</h3>
                <div className="actors__list">
                {
                    actorData.map ((actor, index) => (
                        <ActorCard 
                        id={actor.id}
                        key={index}
                        name={actor.name}
                        imgLink={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                        
                        />
                        ))
                    }
                    </div> 
                    
                    <h3 className='recommendation__title'>Recommendation</h3>
                    <div className="recommend">
                    {
                        recommendInfo.data.results.map ((index, recommend) => (
                            <RecommendCard 
                            id={recommend.id}
                            key={index.id}
                            title={index.title}
                            date={index.release_date}
                            rating={index.vote_average}
                            imgLink={`https://image.tmdb.org/t/p/w500${index.poster_path}`}
                            />
                            ))
                            
                        }
                        </div>
                        
                        
                        
                        </div>
                        ) : (
                            <h1>Loading...</h1>  
                            ) 
                        }
                        </div>
                        
                        
                        </>
                        )
                    }
                    export default SingleMovie
                    
                    
                    
                    
                    
                    
                    