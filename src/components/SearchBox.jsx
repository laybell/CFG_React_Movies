import React from 'react';
import PropTypes from 'prop-types';

function SearchBox(){
return(
    <div>

    <input type='text' class='dropbar' placeholder='Search for a movie...'></input>
    { /*<button type='submit'>Search</button>*/}
</div>
);
};

export {SearchBox};