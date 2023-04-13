import React from 'react';
import PropTypes from 'prop-types';
import './CSS Comp.Review/Footer.css';

function Footer(props){
return(
    <div class='footer'>

    <p class='footerText'>By Katy and Lea. Last updated {props.date} </p>

</div>
);
};

export {Footer};