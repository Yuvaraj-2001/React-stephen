import { useState } from "react";
import "./App.css";
import AnimalShow from "./AnimalShow";

function getRandonAnimal(){
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];  // Randomly select an animal from the array.
}
function App() {
  const [animals, setAnimals] = useState([]);
 
  const handleClick = (m) => {
    console.log(m);
    setAnimals([...animals, getRandonAnimal()]);
  }
  return (
    <div>
      <button onClick={handleClick}>Animal</button>

    <div className="flex wrap gap-20">
      {animals.map((a, k) => <AnimalShow animal={a} key={k}/>)} 

    </div>

    </div>
  );
}

export default App;
