import './AppReviewCSS.css';
import { DescBox } from "./ComponentsReview/DescBox.jsx";
import {Thumbnail} from "./ComponentsReview/Thumbnail.jsx";
import {Title} from  "./ComponentsReview/Title.jsx";
import { SearchBox } from "./ComponentsReview/SearchBox.jsx";
import { Separator } from "./ComponentsReview/Separator.jsx";
import { Footer } from "./ComponentsReview/Footer.jsx";

//Poster Images Imports
import tarzan from './ImagesReview/tarzan.png';
import everything from './ImagesReview/everything.jpg';


function AppReview() {
  return (
    <div className="App">

        <Title/>
        <SearchBox/>
        <div class='central'>
        <br/>
        <div class='LHS'>
        <br/>
        <Thumbnail poster={tarzan} ></Thumbnail> 
        <br/>
        <Separator/> 
        <Thumbnail poster={everything}></Thumbnail>  
        <br/>
        <Separator/>
        <Thumbnail></Thumbnail>  
        </div>

        <div class='RHS'> 
        <br/>
        <DescBox title='Tarzan' year='1999'/>
        <br/>
        <Separator/>
        <DescBox title='Everything Everwhere All At Once'
        year='2022'/>
        <br/>
        <Separator/>
        <DescBox/>
        </div>
        </div>



        {/* <Title/>
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
        <DescBox/> */}

        <Footer date='13th April' />

    </div>
  );
}

export default AppReview;
