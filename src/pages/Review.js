import {useState} from 'react';
import './AppReviewCSS.css';
import { DescBox } from "../components/ReviewDescBox.jsx";
import {Thumbnail} from "../components/Thumbnail.jsx";
import {Title} from  "../components/Title.jsx";
import { SearchBox } from "../components/ReviewSearchBox.jsx";
import {Footer} from '../components/Footer';

//Poster Images Imports
import tarzan from '../ImagesReview/tarzan.png';
import everything from '../ImagesReview/everything.jpg';
import banshees from '../Images/banshees.jpg';


function AppReview() {

  const[topMovie, setTopMovie] = useState("Tarzan");
  

  return (
    <div className="App">

        <Title title='Reviews'/>
        <SearchBox/>
        {/*<h1 class='top-film'>Top film is {topMovie}.</h1> */}
        <div class='central'>
        <br/>
        <div class='LHS'>
        <br/>
        <Thumbnail poster={tarzan} ></Thumbnail> 
        <br/>
        
        <Thumbnail poster={everything}></Thumbnail>  
        <br/>
        
        <Thumbnail poster={banshees}></Thumbnail>  
        </div>

        <div class='RHS'> 
        <br/>
        <DescBox title='Tarzan' year='1999'/>
        <br/>
        
        <DescBox title='Everything Everywhere All At Once'
        year='2022'/>
        <br/>
        
        <DescBox title='The Banshees of Inisherin'
        year='2022'/>
        <br/>
        </div>
        </div>


       <Footer  />

    </div>
  );
}

export default AppReview;
