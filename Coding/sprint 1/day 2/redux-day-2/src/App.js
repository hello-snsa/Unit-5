import './App.css';
// import { store } from './redux/store';
import { useSelector, useDispatch } from "react-redux";
import { addCount } from "./redux/actions"

function App() {

  // const { counter } = store.getState();
  // const x = useSelector((store) => store.counter);
  // console.log("X is ", x);

  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();


  return (
    <div className="App">

      <h3>Counter: {counter}</h3>

      <button
        onClick={() => {
          // store.dispatch(addCount(1));

          // console.log(store.getState());

          dispatch(addCount(1));

        }}>

        Click me
      </button>
    </div>
  );
}

export default App;
