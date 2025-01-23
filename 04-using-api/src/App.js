import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {fetchData} from "./common/methods.js" 
import SearchBar from "./components/SearchBar.js";
import ImageList from "./components/ImageList.js";

import "./App.css";
function App() {
  // Use state to store the current page
  const [images, updateImage] = useState([]);
  const callAPI = async (param) => {
    const response = await fetchData(param);
    const formatedList = response.data.results.map(e => e.urls.full)
    updateImage(formatedList);
  };

  return (
    <>
      <h1>Search Through</h1>
      <SearchBar update={callAPI}/>
      <div >
        <ImageList images={images}/>
      </div>
    </>
  );
}

export default App;
