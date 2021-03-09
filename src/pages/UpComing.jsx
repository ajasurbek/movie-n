import { useState, useEffect } from 'react'
import axios from 'axios'

import './UpComing.scss'
import UpComingCard from '../components/UpComingCard'

const UpComing = () => {
    
    
    const [TopRatedList, setTopRatedList] = useState({
        isFetched: false,
        data: {},
        error: null
    })
    
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/upcoming`, {
        params: {
            api_key: '5a7f563cfd45b94e412aa8504472de5c'
        }
    })
    
    .then(function (response) {
        setTopRatedList({
            isFetched: true,
            data: response.data,
            error: false,
        })
    })
    .catch(function (error) {
        
        setTopRatedList({
            isFetched: true,
            data: [],
            error: error,
        }) 
    }) 
}, [])

console.log(TopRatedList.data)

return (
    <>
    <div className="container">
    {
        TopRatedList.isFetched ? (
            <div className="latest__list">
            {
                TopRatedList.data.results.map ((index, tre) => (
                    <UpComingCard 
                    key={index.id}
                    title={index.title}
                    date={index.release_date}
                    ranking={index.vote_average}
                    imgLink={`https://image.tmdb.org/t/p/w500${index.poster_path}`}
                    />
                    
                    ))
                }
                </div>
                ) : (
                    <h1>loading.....</h1>
                    )
                    
                }
                </div>
                
                </>
                )
            }
            export default UpComing
            
            