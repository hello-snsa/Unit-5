import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import Routes from './Pages/Routes';

function App() {
  return (
    <div className="App">
      <h1>Join a group to meet people, make friends, find support, grow a business, and explore your interests. Thousands of events are happening every day, both online and in person!</h1>


      {/* //technology, food, language learning, movies, culture, art, drama etc */}
      <Routes />
    </div>
  );
}


export default App;
