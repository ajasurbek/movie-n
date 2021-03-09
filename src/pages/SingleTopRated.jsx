import { useState, useEffect } from 'react'
import axios from 'axios'



const SingleTopRated = ({ match }) => {
    
    
    const [ratedInfo, setratedInfo] = useState({
        isFetched: false, 
        data: {},
        error: null
    })
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/movie/${match.params.id}/credits`, {
        params: {
            api_key: '5a7f563cfd45b94e412aa8504472de5c'
        }
    })
    .then(function (response) {
        console.log(response)
        setratedInfo({
            isFetched: true,
            data: response.data,
            error: false,
        })
    })
    .catch(function (error) {
        setratedInfo({
            isFetched: true,
            data: [],
            error: error,
        }) 
    }) 
    
}, [])
console.log(ratedInfo.data.results);

return (
    <>
    <div className="container">
          {
              ratedInfo.isFetched ? (
                <h1>Hello
                </h1>
                ) : (
                    <h1>Loading...</h1>  
                    ) 
          }
      </div>
    </>
    )
}





export default SingleTopRated