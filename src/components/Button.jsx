import React from 'react';
import PropTypes from 'prop-types';
import "./Button.css";

const Button = ({ message = "Add to watchlist" }) => {
    return (
    <button className="button" type="button">
    <h2 className="button_text">
    {message}
    </h2>
    </button>
    );
    }
    
    Button.propTypes = {
    message: PropTypes.string
    }
    
    export default Button;