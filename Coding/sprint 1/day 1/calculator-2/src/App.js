import './App.css';
// import { store } from './redux/store';
import { useSelector, useDispatch } from "react-redux";
import { addCount, setAge, subCount } from "./redux/actions"
import { Todo } from './components/InputBox';
import Calculator2 from './components/Calculator2';

function App() {

  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const age = useSelector((store) => store.age);


  return (
    <div className="App">



      <h3>Custom Calculator 2</h3>
      <h3>Value: {counter}</h3>

      <Calculator2 />











    </div>
  );
}

export default App;
