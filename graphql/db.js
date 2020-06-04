import axios from 'axios';
const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
    // const {
    //     data: {
    //         data: {
    //             movies
    //         }
    //     }
    // } = await axios(LIST_MOVIES_URL, {
    //     params: {
    //         limit,
    //         minimum_rating: rating
    //     }
    // });
    const { data: { data: { movies } } } = await axios(LIST_MOVIES_URL, { params: { limit, minimum_rating: rating } });
    console.log(movies);
    return movies;
}

export const getMovie = async (movie_id) => {
    const { data: { data: { movie } } } = await axios(MOVIE_DETAILS_URL, { params: { movie_id } });
    return movie;
}

export const getSuggestions = async (movie_id) => {
    const { data: { data: { movies } } } = await axios(MOVIE_SUGGESTIONS_URL, { params: { movie_id } });
    console.log('movies', movies)
    return movies;
}






















// import fetch from 'node-fetch'

// const API_URL = "https://yts.mx/api/v2/list_movies.json";

// export const getMovies = (limit, rating) => {
//     let REQUEST_URL = API_URL;
//     if (limit > 0) {
//         REQUEST_URL += `?limit=${limit}`
//     }

//     if (rating > 0) {
//         REQUEST_URL += `&minimum_rating=${rating}`
//     }

//     return fetch(REQUEST_URL).then(res => res.json()).then(json => json.data.movies);
// }
// let movies = [
//     {
//         id: 0,
//         name: "star wars - the new one",
//         score: 0.1
//     },
//     {
//         id: 1,
//         name: "Avengers - The new one",
//         score: 8
//     },
//     {
//         id: 2,
//         name: "The Godfather I",
//         score: 99
//     },
//     {
//         id: 3,
//         name: "Logan",
//         score: 2
//     }
// ];

// export const getMovies = () => movies;
// export const getById = id => {
//     const filterMovies = movies.filter(movie => movie.id === id);
//     return filterMovies[0];
// }

// export const deleteMovie = (id) => {
//     const cleanMovies = movies.filter(movie => movie.id !== id);
//     if (movies.length > cleanMovies.length) {
//         movies = cleanMovies;
//         return true;
//     } else {
//         return false;
//     }
// }

// export const addMovie = (name, score) => {
//     const newMovie = {
//         id: `${movies.length + 1}`,
//         name,
//         score
//     };
//     movies.push(newMovie);
//     return newMovie;
// }
// export const people = [
//     {
//         id: 1,
//         name: "sanghoone",
//         age: 32,
//         gender: "gender"
//     },
//     {
//         id: 2,
//         name: "sanghoone2",
//         age: 33,
//         gender: "female"
//     },
//     {
//         id: 3,
//         name: "sanghoone3",
//         age: 34,
//         gender: "male"
//     },
//     {
//         id: 4,
//         name: "sanghoone4",
//         age: 35,
//         gender: "test"
//     }]

// export const getById = id => {
//     const filteredPeople = people.filter(obj => id === obj.id);
//     return filteredPeople[0];
// }