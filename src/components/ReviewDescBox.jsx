import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import '../components/CSS/DescBox.css';
import { UseLocalStorage } from './UseLocalStorage';
import '../pages/App.css'

function DescBox(props){



//This allows saving of the ratings based on Title name
const initState = {
    newTitle: [props.title]
};
const [state, setState] = useState(initState)
useEffect (() => { 
      setState({ ...state, newTitle: [props.title] }) 
}, [props.title])
//

const initOpState = {
    opinionTitle: [props.title]+'op'
};
const [opstate, setOpState] = useState(initOpState)
useEffect (() => { 
      setState({ ...opstate, opinionTitle: [props.title] +'op'}) 
}, [props.title]+'op')


const [opinion, setOpinion] = UseLocalStorage(initOpState.opinionTitle, '');
const [rating, setRating] = UseLocalStorage(initState.newTitle[0],0);


function minusRating() {
    if(rating > 0) {
    setRating(prevRating => prevRating -1)
    
}
}

function plusRating() {

    if(rating < 5) {
    console.log(typeof(rating));
    setRating(prevRating => prevRating +1);
}
};

return(
    <div class='dimensions'> 
        <h2 id={props.title}>{props.title}</h2>
        <h3>Year: {props.year}</h3>
        <h3>Rating:</h3>
                    
        <button onClick={minusRating}>-</button>
        
        <input className='rating'
            type='text'
            value={rating}
            onChange={e => 
                setRating(parseInt(e.target.value))}
        ></input>
        <button onClick={plusRating}>+</button>

        <h3>Opinion:</h3>
        <input className='opinion-box'
            type='text'
            value={opinion}
            onChange={e => setOpinion(e.target.value)}
        ></input>
        {/* test area */   } 
        
        
</div>
);
};

export {DescBox};