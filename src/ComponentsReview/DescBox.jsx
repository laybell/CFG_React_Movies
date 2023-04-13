import React from 'react';
import PropTypes from 'prop-types';
import './CSS Comp.Review/DescBox.css';

function DescBox(props){
return(
    <div> 
        <h2>Title: {props.title}</h2>
        <h3>Year: {props.year}</h3>
        <h3>Rating: {props.rating}</h3>
        <h3>Opinion:</h3>
        
        
</div>
);
};

export {DescBox};