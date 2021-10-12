import './App.css';
// import { store } from './redux/store';
import { useSelector, useDispatch } from "react-redux";
import { addCount, setAge, subCount } from "./redux/actions"
import { Todo } from './components/Todo';
import Calculator1 from './components/Calculator1';

function App() {

  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const age = useSelector((store) => store.age);


  return (
    <div className="App">


      {/* <Calculator1 /> */}

      <h3>Custom Calculator: {counter}</h3>

      <button
        onClick={() => {

          dispatch(subCount(1));

        }}>

        Decrement
      </button>

      <button
        onClick={() => {

          dispatch(addCount(1));

        }}>

        Increment
      </button>


      {/* 
      <h3> age is {age}</h3>

      <button
        onClick={() => {
          dispatch(setAge(30))
        }
        }>
        Increase age
      </button>


      <Todo /> */}



    </div>
  );
}

export default App;
