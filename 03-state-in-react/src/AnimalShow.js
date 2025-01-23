
import { useState } from "react";
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heartIcon from './svg/heart.svg';
import horse from './svg/horse.svg';

const SVG = {
    bird, cat, cow, dog, gator, horse
}
function AnimalShow({animal}){
  console.log('rerender');

    const [heart, setHeart] = useState(10);

    return (
        <div className="flex flex-column box">
          
            <h2>{animal}</h2>
            <div className="position-relative">
            <img src={SVG[animal] } className="w-100" alt="animal"/>
            <img className="position-absolute center-absolute" onClick={() => setHeart(heart + 1)} src={heartIcon} alt="heart" style={{width: 5 * heart}}/>
            </div>
            
        </div>
    )
}

export default AnimalShow;