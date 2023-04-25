import React from 'react';
import './App.css'
import PropTypes from 'prop-types';

function DescBox(props){
return(
    <div> 
        <h2>Title: {props.title}</h2>
        <h3>Year: {props.year}</h3>
</div>
);
};

export {DescBox};