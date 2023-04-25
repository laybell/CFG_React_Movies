import React from 'react';

const SearchBox = (props) => {
	return (
		<div className='search-box'>
			<input
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Search for a movie...'
			></input>
		</div>
	);
};

export default SearchBox;