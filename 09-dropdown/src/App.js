import { useState } from 'react';
// import Dropdown from './components/Dropdown';
import BaseDropdown from './components/BaseDropdown';

function App() {
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];

  return (
    <div>
           {first} - {second}
           <hr/>
           <hr/>
      <div className="flex">
        <BaseDropdown obj={first} options={options}  update={(s) =>  setFirst(s)} />
        <BaseDropdown obj={second}  options={options} update={(s) =>  setSecond(s)} />
      </div>
    </div>
  );
}

export default App;
