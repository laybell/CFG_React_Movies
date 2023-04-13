//import './App.css';
import { DescBox } from "./ComponentsReview/DescBox.jsx";
import {Thumbnail} from "./ComponentsReview/Thumbnail.jsx";
import {Title} from  "./ComponentsReview/Title.jsx";
import { SearchBox } from "./ComponentsReview/SearchBox.jsx";
import { Separator } from "./ComponentsReview/Separator.jsx";
import { Footer } from "./ComponentsReview/Footer.jsx";

//Poster Images Imports
import tarzan from './ImagesReview/tarzan.png';
import everything from './ImagesReview/everything.jpg';


function App() {
  return (
    <div className="App">
        <Title/>
        <SearchBox/>
        <br/>
        <Thumbnail poster={tarzan} ></Thumbnail>  
        <DescBox title='Tarzan' year='1999'/>
        <br/>
        <Separator/>
        <Thumbnail poster={everything}></Thumbnail>  
        <DescBox title='Everything Everwhere All At Once'
        year='2022'/>
        <br/>
        <Separator/>
        <Thumbnail></Thumbnail>  
        <DescBox/>

        <Footer date='13th April' />

    </div>
  );
}

export default App;
