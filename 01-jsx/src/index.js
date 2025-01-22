// import react and ReactDom 

import React from 'react'; // components to work together 
import ReactDOM from 'react-dom'; // turn them into DOM elements, to show it in Browser

// reference of it
const rootElem = document.getElementById('root');

// rectDom to take control of the root element
const root = ReactDOM.createRoot(rootElem);

// Create a component
function App(){
  return (
    <div>
      <h1>Hello!</h1>
      <p>Are you, are you the hanging to the tree. </p>
    </div>
  )
}
// component to screen
root.render(<App />);

