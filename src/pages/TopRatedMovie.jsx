import { useState, useEffect} from 'react'
import axios from 'axios'

import './TopRated.scss'
import LatestCard from '../components/LatestMovieCard'



const TopRated = () => {

const [TopRatedList, setTopRatedList] = useState({
    isFetched: false,
    data: {},
    error: null
})


useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated`, {
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
                            TopRatedList.data.results.map ((index) => (
                                <LatestCard 
                                key={index}
                                imgLink={`https://image.tmdb.org/t/p/w500${index.poster_path}`}
                                nomi={index.title}
                                ranking={index.vote_average}
                                vaqti={index.release_date}
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
export default TopRated