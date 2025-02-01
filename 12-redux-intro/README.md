
@redux/toolkit

slices -> certain cartain modules (export all actionCreators)
store <- compbines all slices

now we are good with store, we will connect to react-redux, (index.js)
<Provider store={store}><App/></Provider>
  |
  |
  |
-> in component
  |
  |
  |
import {dispatch, useSelector} from 'react-redux';
// state referece
const stateReference = useSelector((state)=>{
    return state.songs;
});

now well import actionCreators and dispatch();


