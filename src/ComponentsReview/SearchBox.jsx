import React from 'react';
import PropTypes from 'prop-types';
import './CSS Comp.Review/SearchBox.css';

function SearchBox(){
return(
    <div class='searchBox'>

    <input type='text' placeholder='search here...'></input>
    <button type='submit'>Search</button>
</div>
);
};

export {SearchBox};