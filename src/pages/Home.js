import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import MovieSearchBox from '../components/MovieSearchBox';
import SearchBox from '../components/MovieSearchBox';
import AddFavourites from '../components/AddToWatchlist';
import {Footer} from '../components/Footer';
import './App.css';
import AddToWatchlist from '../components/AddToWatchlist';
import RemoveFromWatchlist from '../components/RemoveFromWatchlist';

//API key (allows 1000 searches per day)
const key='59143cd6';

const Home = () => {
    const [movies, setMovies]= useState([]);
    const [searchValue, setSearchValue]=useState('');
    const [watchlist, setWatchlist] = useState([]);

    const getMovieRequest = async ()=>{
        const url=`http://www.omdbapi.com/?s=${searchValue}&apikey=${key}`;

        const response =await fetch(url);
        const responseJson=await response.json();

        if (responseJson.Search){
            setMovies(responseJson.Search);
        }
    };

    const addMovieToWatchlist = (movie) => {
		const newWatchlist = [...watchlist, movie];
		setWatchlist(newWatchlist);
	};

    const removeFromWatchlist = (movie) => {
        const newWatchlist = watchlist.filter((watchlist)=> watchlist.imdbID !== movie.imdbID);
        setWatchlist(newWatchlist);
    };

    useEffect (() =>{
        getMovieRequest(searchValue);
    },[searchValue]);

    return(
        <div className='container movie-app'>
			<div className='row'>
				<MovieListHeading  heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>

			<div className='row list-of-movies'>
				<MovieList movies={movies} 
                AddToWatchlistComponent={AddToWatchlist} 
                handleWatchlistClick={addMovieToWatchlist}
                />
			</div>

            <div className='row'>
				<MovieListHeading heading='Watch List' />
			</div>

			<div className='row list-of-movies'>
				<MovieList movies={watchlist} AddToWatchlistComponent={RemoveFromWatchlist} handleWatchlistClick={removeFromWatchlist}/>
			</div>
            <Footer  />
		</div>
    )
  };
  
  export default Home;