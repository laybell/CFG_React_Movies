import React from 'react';
import PropTypes from 'prop-types';
import '../components/CSS/SearchBox.css';


function SearchBox(props){
    const clicked = () => {
        window.alert('worked');  
    }
    const hideDropdown = () => {
        document.getElementById("hideDropdown").classList.toggle("show");
    }
    const filterFunction = () => {
        var input, filter, a, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        const div = document.getElementById("hideDropdown");
        a = div.getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
          var txtValue = a[i].textContent || a[i].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
          } else {
            a[i].style.display = "none";
          }
        }
    }
return(

<div class='SearchBox'>
    <div class='dropdown'>
    <input id='myInput' type='text' class='dropbar' placeholder='Search for a movie...' onKeyUp={filterFunction}></input>
    <div id='hideDropdown'class='dropdown-content'> 
        <a href='#Tarzan'>Tarzan</a>
        <a href='#Everything Everywhere All At Once'>Everything Evewhere All At Once</a>
        <a href='#The Banshees of Inisherin'>Baneshins of Isherin</a>
    </div>
    </div>

</div>
);
};

export {SearchBox};