import React from 'react';
import PropTypes from 'prop-types';

function SearchBox(){
return(
    <div>

    <input type='text' placeholder='search here...'></input>
    <button type='submit'>Search</button>
</div>
);
};

export {SearchBox};