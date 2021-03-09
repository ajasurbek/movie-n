import { useState, useEffect } from 'react'
import axios from 'axios'
import './TvShow.scss'
import TvCard from '../components/TvShows'
const TvShow = () => {
    
    const [tvShowList, setTvShow] = useState({
        isFetched: false,
        data: {},
        error: null
    })
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/popular`, {
        params: {
            api_key: '5a7f563cfd45b94e412aa8504472de5c'
        }
    })
    .then(function (response) {
        console.log(response)
        setTvShow({
            isFetched: true,
            data: response.data,
            error: false,
        })
    })
    .catch(function (error) {
        setTvShow({
            isFetched: true,
            data: [],
            error: error,
        })
    })  
}, [])

console.log(tvShowList.data)

return (
    <>
    <div className="container">
    {
        tvShowList.isFetched ? (
            <div className="tv__list">
            {
                tvShowList.data.results.map((index, tvsh) => (
                    <TvCard
                    key={index}
                    id={index.id}
                    title={index.original_name}
                    date={index.first_air_date}
                    ranking={index.vote_average}
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
            export default TvShow
            
            
            