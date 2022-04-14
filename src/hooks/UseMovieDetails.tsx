import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { Cast, Credits } from "../interfaces/creditsInterface"
import { MovieFull } from "../interfaces/movieInterface"

interface UseMovieDetailsProps{
    isLoading:boolean,
    movieFull?:MovieFull,
    cast:Cast[]
}
const UseMovieDetails = (movieID:number) => {
    const [state,setState] = useState<UseMovieDetailsProps>({
        isLoading:true,
        movieFull:undefined,
        cast:[]

    })

    const {isLoading,movieFull,cast} = state

    const getMovieDetails =async()=>{
      const resp = await movieDB.get<MovieFull>(`/${movieID}`)
      const credits = await movieDB.get<Credits>(`/${movieID}/credits`)

     const [movieDetails, castPromiseResponse] = await Promise.all([resp,credits])

     setState({
        isLoading:false,
        movieFull:movieDetails.data,
        cast:castPromiseResponse.data.cast
     })
    }

    useEffect(()=>{
        getMovieDetails()
    },[])
   
    return{
        isLoading,
        movieFull,
        cast
    }
}

export default UseMovieDetails
