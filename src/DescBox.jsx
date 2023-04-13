import React from 'react';
import PropTypes from 'prop-types';

function DescBox(props){
return(
    <div>
        <h2>Title: {props.title}</h2>
        <h3>Year: {props.year}</h3>
        <h3>Rating: {props.rating}</h3>
        <h3>Opinion:</h3>
        <input type='text' placeholder='My favourite part was...'></input>
        
</div>
);
};

export {DescBox};