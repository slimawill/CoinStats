import './App.css';
import {Router, Route} from  'react-router-dom';
import Home from './pages/Home.js';

function App() {
  return (
    <Router>
      <Route path="/" Component={Home}/>
    </Router>
  );
}

export default App;
