import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import MovieSearchBox from '../components/MovieSearchBox';
import SearchBox from '../components/MovieSearchBox';
import AddFavourites from '../components/AddToFavourites';
import {Footer} from '../components/Footer';

//API key (allows 1000 searches per day)
const key='59143cd6';

const Home = () => {
    const [movies, setMovies]= useState([]);
    const [searchValue, setSearchValue]=useState('');
    const [favourites, setFavourites] = useState([]);

    const getMovieRequest = async ()=>{
        const url=`http://www.omdbapi.com/?s=${searchValue}&apikey=${key}`;

        const response =await fetch(url);
        const responseJson=await response.json();

        if (responseJson.Search){
            setMovies(responseJson.Search);
        }
    };

    const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
	};

    useEffect (() =>{
        getMovieRequest(searchValue);
    },[searchValue]);

    return(
        <div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading  heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList movies={movies} 
                favouriteComponent={AddFavourites} 
                handleFavouritesClick={addFavouriteMovie}
                />
			</div>
            <div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favourites' />
			</div>
			<div className='row'>
				<MovieList movies={favourites} favouriteComponent={AddFavourites} />
                
			</div>
            <Footer  />
		</div>
    )
  };
  
  export default Home;