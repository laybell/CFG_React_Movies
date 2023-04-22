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
					<div className="info">
						<div className="header">
							<h3 className="title">{movie.title}</h3>	
							</div>
					</div>
					<div className="controls">
		<button className="btn">Add to Watchlist</button>
	</div>

				</div>
				
			))}

			
			
		</>
		
	);
};

export default MovieList;
