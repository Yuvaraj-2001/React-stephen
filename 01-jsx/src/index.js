// import react and ReactDom 

import React from 'react'; // components to work together 
import ReactDOM from 'react-dom'; // turn them into DOM elements, to show it in Browser
import App from './App'
// reference of it
const rootElem = document.getElementById('root');

// rectDom to take control of the root element
const root = ReactDOM.createRoot(rootElem);

// Create a component

// component to screen
root.render(<App />);

