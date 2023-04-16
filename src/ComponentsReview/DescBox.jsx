import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './CSS Comp.Review/DescBox.css';

function DescBox(props){

const [rating, setRating] = useState(0)

function minusRating() {
    setRating(prevRating => prevRating -1)
    const trating=rating;
    console.log(rating)
}

function plusRating() {
    setRating(prevRating => prevRating +1)
}

function write(){
    console.log('hi');
    <h1>test</h1>;
}
return(
    <div> 
        <h2 id={props.title}>{props.title}</h2>
        <h3>Year: {props.year}</h3>
        <h3>Rating: {props.rating}</h3>
        <button onClick={minusRating}>-</button>
        {write()}
        <span>    {rating}  </span>
        <button onClick={plusRating}>+</button>
        <h3>Opinion:</h3>
        
        
</div>
);
};

export {DescBox};