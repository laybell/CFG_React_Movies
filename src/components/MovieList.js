import React from 'react';


//get list of movies from props
//map function lets you loop over list of movies
//image displayed using URL as image source


function MovieList(props){
	const AddToWatchlistComponent = props.AddToWatchlistComponent;
	return (
		<>
			{props.movies.map((movie, index) => (
				<div
				onClick={() => props.handleWatchlistClick(movie)}
				className='image-container'>
					<img className='movie-poster' src={movie.Poster} alt='movie'></img>
					<div className='overlay'>
						<AddToWatchlistComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;