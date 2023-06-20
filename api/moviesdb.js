import axios from 'axios';
import { apiKey } from '../constants/constants';

// endpoints
const apiBaseUrl = 'https://api.themoviedb.org/3'
const trendingMoviesEndpoint= `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`
const upcomingMoviesEndpoint= `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`
const topRatedMoviesEndpoint= `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`

// dynamic endpoint
const movieDetailsEndpoint=id => `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`
const movieCreditsEndpoint=id => `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`
const movieSimilarEndpoint=id => `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`


// for search
const searchMoviesEndpoint=`${apiBaseUrl}/search/movie?api_key=${apiKey}`

 
// person endpoint
const personDetailEndpoint=id => `${apiBaseUrl}/person/${id}?api_key=${apiKey}`
const persoMoviesEndpoint=id => `${apiBaseUrl}/person/${id}/movie_credits?api_key=${apiKey}`


// function to fetch url
export const image500 =path=>path?`https://image.tmdb.org/t/p/w500/${path}`:null
export const image342 =path=>path?`https://image.tmdb.org/t/p/w342/${path}`:null
export const image185 =path=>path?`https://image.tmdb.org/t/p/w185/${path}`:null



// fallback images 
export const fallbackMoviePoster = 'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg';
export const fallbackPersonImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU';




const apiCall=async (endpoint, params)=>{
    const options = {
        methods: 'GET',
        url:endpoint,
        params: params?params: {}
    }    

    try{
        const responce = await axios.request(options)
        return responce.data
    }catch(err){
        console.log("error : " + err);
        return {}
    }    
}    


// this will get all trending movies endpoint

export const fetchTrendingMovies = ()=>{
    return apiCall(trendingMoviesEndpoint)
}

export const fetchUpcomingMovies = ()=>{
    return apiCall(upcomingMoviesEndpoint)
}

export const fetchTopRatedMovies = ()=>{
    return apiCall(topRatedMoviesEndpoint)
}


// function for dynamic endpoints
export const fetchMovieDetails = id =>{
    return apiCall(movieDetailsEndpoint(id))
}
export const fetchMovieCredits = id =>{
    return apiCall(movieCreditsEndpoint(id))
}
export const fetchSimilarMovies = id =>{
    return apiCall(movieSimilarEndpoint(id))
}


// feching person 
export const fetchPersonDetails = id =>{
    return apiCall(personDetailEndpoint(id))
}

export const fetchPersonMovies = id =>{
    return apiCall(persoMoviesEndpoint(id))
}


// searching
export const searchMovies = params =>{
    return apiCall(searchMoviesEndpoint,params)
}