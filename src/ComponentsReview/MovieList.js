import React from 'react';


//get list of movies from props
//map function lets you loop over list of movies
//image displayed using URL as image source


function MovieList(props){
	const FavouriteComponent = props.favouriteComponent;
	return (
		<>
			{props.movies.map((movie, index) => (
				<div 
				onClick={() => props.handleFavouritesClick(movie)}
				className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					<div className='overlay d-flex align-items-center justify-content-center'>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;