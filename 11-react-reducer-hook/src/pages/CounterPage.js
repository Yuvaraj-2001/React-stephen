import { useState } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };


  const handleChange = (e) =>{

    const number = parseInt(e.target.value);
    setValueToAdd(number);
  };

  const addValueToCount = (e) => {
    e.preventDefault();
    setCount(count + valueToAdd);
    setValueToAdd(0);
  };

  console.log('re render counter')

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form>
        <label>Add a lot!</label>
        <input
          type="number"
          value={valueToAdd || ''}
          onChange={handleChange}
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button onClick={addValueToCount}>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
