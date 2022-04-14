import axios from "axios";


const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'50c0a564ecf735c34b47ac98508ac21d',
        language:'es-ES'
    }
})


export default movieDB