import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path='/' element={<Register/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/products' element={<ProductList/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
