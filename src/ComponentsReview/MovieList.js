import React from 'react';

//get list of movies from props
//map function lets you loop over list of movies
//image displayed using URL as image source

function MovieList(props){
	return (
		<>
			{props.movies.map((movie, index) => (
				<div >
					<img src={movie.Poster} alt='movie'></img>
				</div>
			))}
		</>
	);
};

export default MovieList;
