import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from  'react-router-dom';
import Home from './pages/Home.js';
import Converter from './pages/Converter.js';
import Moedas from './pages/Moedas.js';

function App() {
  return (
    <Router>
      <Link to="/">Home </Link>
      <Link to="/converter">Converter </Link>
      <Link to="/moedas">Moedas </Link>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/converter" element={<Converter/>}/>
        <Route path="/moedas" element={<Moedas/>}/>
        <Route path="/moedas/:sigla" element={<Moedas/>}/>
      </Routes>
    </Router>
  );
}

export default App;
