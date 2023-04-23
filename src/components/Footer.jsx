import React from 'react';
import PropTypes from 'prop-types';
import '../components/CSS/Footer.css';

function Footer(props){

return(
    <div class='footer'>

    <p class='footerText'>By Katy, Lea and Jessica {props.date} </p>

</div>
);
};

export {Footer};