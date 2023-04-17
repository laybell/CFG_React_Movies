//import './App.css';
import { DescBox } from "../components/DescBox.jsx";
import {Thumbnail} from "../components/Thumbnail.jsx";
import {Title} from  "../components/Title.jsx";
import { SearchBox } from "../components/SearchBox.jsx";
import { Separator } from "../components/Separator.jsx";
import { Button } from "../components/Button.jsx";

//Poster Images Imports
import tarzan from '../ImagesReview/tarzan.png';
import everything from '../ImagesReview/everything.jpg';
import banshees from '../Images/banshees.jpg';
import top from '../Images/top.jpg';
import maverick from '../Images/maverick.jpg'; 

function Watchlist () {
    return (
        <div className="App">
             <Title/>
        <SearchBox/>
        <br/>
        <Thumbnail poster={tarzan} ></Thumbnail>  
        <DescBox title='Tarzan' year='1999'/>
        <Button/>
        <br/>
        <Separator/>
        <Thumbnail poster={everything}></Thumbnail>  
        <DescBox title='Everything Everwhere All At Once'
        year='2022'/>
        <Button/>
        <br/>
        <Separator/>
        <Thumbnail poster={banshees}></Thumbnail>  
        <DescBox title='The Banshees of Inisherin' year='2022'/>
        <Button/>
        <br/>
        <Separator/>
        <Thumbnail poster={top}></Thumbnail>
        <DescBox title='Top Gun' year='1986'/>
        <Button/>
        <br/>
        <Separator/>
        <Thumbnail poster={maverick}></Thumbnail>
        <DescBox title='Top Gun: Maverick' year='2022'/>
        <Button/>
        </div>
    )
}
export default Watchlist;