import { useState, useEffect } from 'react'
import axios from 'axios'

import TvRecommendCard from '../components/TvRecommendCard'
const SingleShow = ({ match }) => {

    const [tvShowInfo, settvShowInfo] = useState({
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
        axios.get(`https://api.themoviedb.org/3/tv/${match.params.id}`, {
            params: {
            api_key: '5a7f563cfd45b94e412aa8504472de5c'
            }
           })
          .then(function (response) {
           settvShowInfo({
               isFetched: true,
               data: response.data,
               error: false,
           })
          })
          .catch(function (error) {
            settvShowInfo({
                isFetched: true,
                data: [],
                error: error,
            }) 
          }) 


          axios.get(`https://api.themoviedb.org/3/tv/${match.params.id}/recommendations`, {
            params: {
            api_key: '5a7f563cfd45b94e412aa8504472de5c'
            }
           })
          .then(function (response) {
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

    return (
        <>
      <div className="container">
          {
              recommendInfo.isFetched ? (
                <div className="tv-recommend__list">
                    {
                        recommendInfo.data.results.map((index, recommend) => (
                            <TvRecommendCard 
                            id={recommend.id}
                            key={index.id}
                            title={index.name}
                            date={index.first_air_date}
                            rating={index.vote_average}
                            imgLink={`https://image.tmdb.org/t/p/w500${index.poster_path}`}
                            />
                        ))
                    }
                </div>
                ) : (
                    <h1>Loading...</h1>  
                    ) 
          }
      </div>
        </>
    )
}
export default SingleShow


