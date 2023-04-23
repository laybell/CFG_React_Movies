import React from 'react';
import PropTypes from 'prop-types';
import '../components/CSS/Title.css';

function Title(props){
return(
    <div>
        <h1 class='header'>{props.title}</h1>

</div>
);
};

export {Title};