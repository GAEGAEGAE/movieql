import axios from "axios";
const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESETIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating,
    },
  });
  return movies;
};

export const getMovie = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movie;
};

export const getSuggestions = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(MOVIE_SUGGESETIONS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movies;
};

// import fetch from "node-fetch";

// const API_URL = "https://yts.am/api/v2/list_movies.json?";


// export const getMovies = (limit, rating) => {
//     let REQUEST_URL = API_URL;

//     if(limit > 0) {
//         REQUEST_URL += `limit=${limit}`;
//     }

//     if(rating > 0) {
//         REQUEST_URL += `&minimum_rating=${rating}`;
//     }

//     return fetch(REQUEST_URL)
//       .then(res => res.json())
//       .then(json=>json.data.movies);
// }

// let movies = [
//     {
//         id: 0,
//         name: "Star Wars - The new one",
//         score: 13
//     },
//     {
//         id: 1,
//         name: "Avengers - The new one",
//         score: 8
//     },
//     {
//         id: 2,
//         name: "The Godfather 1",
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
//     const filteredMovies = movies.filter(movie => movie.id === id);

//     return filteredMovies[0];
// };


// export const deleteMovie = (id) => {
//     const cleanedMovies = movies.filter(movie => movie.id !== id);

//     if(movies.length > cleanedMovies.length) {
//         // 변화
//         movies = cleanedMovies;

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
//     }

//     movies.push(newMovie);

//     return newMovie;
// };



// export const people = [
//     {
//         id: "1",
//         name: "MoonSungHoon",
//         age: 18,
//         gender: "female"
//     },
//     {
//         id: "2",
//         name: "KimDupbab",
//         age: 21,
//         gender: "male"
//     },
//     {
//         id: "3",
//         name: "ParkHerin",
//         age: 43,
//         gender: "male"
//     },
//     {
//         id: "4",
//         name: "OgamJa",
//         age: 22,
//         gender: "female"
//     }
// ]


// export const getById = id => {
//     const filteredPeople = people.filter(person => person.id === String(id));
//     return filteredPeople[0];
// }