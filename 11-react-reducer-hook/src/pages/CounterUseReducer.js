import { useReducer, useState } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const VALUE_TO_ADD = 'valueToAdd';
const VALUE_TO_SET = 'valueToSet';

const reducer = (state, action) => {
    // whatever we return will be new state
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + action.payload};
        case DECREMENT:
            return {...state, count: state.count - action.payload};
        case VALUE_TO_ADD:
            return {...state, valueToAdd: action.payload};
        case VALUE_TO_SET:
            return {...state, count: state.count + state.valueToAdd, valueToAdd: 0 };
        default:
            return state;
    }
};

function CounterPage({ initialCount }) {
//   const [count, setCount] = useState(initialCount);
const [counter, dispatch] = useReducer(reducer, {count: initialCount, valueToAdd: 0})
//   const [valueToAdd, setValueToAdd] = useState(0);



  const increment = () => {
    dispatch({type: INCREMENT, payload: 1});
  };

  const decrement = () => {
    dispatch({type: DECREMENT, payload: 1});
  };

  const handleChange = (e) =>{
    const numer = parseInt(e.target.value);
    dispatch({type: VALUE_TO_ADD, payload: numer});
  };

  const addValueToCount = (e) => {
    e.preventDefault();
    dispatch({type: VALUE_TO_SET});

  };

  console.log('re render counter')

  return (
    <Panel className="m-3">
      <h1 className="text-lg text-primary"> Count is {counter.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form>
        <label>Add a lot!</label>
        <input
          type="number"
          value={counter.valueToAdd || ''}
          onChange={handleChange}
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button onClick={addValueToCount}>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
