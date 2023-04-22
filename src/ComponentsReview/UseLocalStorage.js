
// Youtube link on how Local Storage works!
// https://www.youtube.com/watch?v=6ThXsUwLWvc&t=28s
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

function getSavedValue(key, initialValue){
    const savedValue=JSON.parse(localStorage.getItem(key))
    if (savedValue) return savedValue

    if (initialValue instanceof Function)return initialValue()
    return initialValue
}

function UseLocalStorage(key, initialValue){
    const [value, setValue] = useState( () => {
        return getSavedValue(key, initialValue)

    }   )

    //When value changes, this updates hook (needs converting to string)
    useEffect( () => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value]


    )

return(
    [value, setValue]


);};

export {UseLocalStorage};