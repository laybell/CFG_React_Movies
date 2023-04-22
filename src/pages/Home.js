import React, { useState, useEffect } from 'react';
import MovieList from '../ComponentsReview/MovieList';
import MovieSearchBox from '../ComponentsReview/MovieSearchBox';
import SearchBox from '../ComponentsReview/MovieSearchBox';

//API key (allows 1000 searches per day)
const key='59143cd6';

const Home = () => {
    const [movies, setMovies]= useState([]);
    const [searchValue, setSearchValue]=useState('');

    const getMovieRequest = async ()=>{
        const url=`http://www.omdbapi.com/?s=${searchValue}&apikey=${key}`;

        const response =await fetch(url);
        const responseJson=await response.json();

        if (responseJson.Search){
            setMovies(responseJson.Search);
        }
    };

    useEffect (() =>{
        getMovieRequest(searchValue);
    },[searchValue]);

    return(
        <div>

        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}></SearchBox>
         <h1>Home</h1>
         <MovieList movies={movies} />
         </div>
    )
  };
  
  export default Home;