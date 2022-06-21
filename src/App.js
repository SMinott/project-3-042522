import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import GroceryCategory from './Components/GroceryCategory';
import GroceryContainer from './Components/GroceryContainer';
import Form from './Components/Form'
// import { CATEGORIES, GROCERY } from "./data";


function App() {
  return (
    <div className="App">
    <Router>
      
      <h1> Grocery Shopping List</h1>
      
      <nav>
        <ul className="linkClass">
          <li> <Link to='/'> Form - Edit Grocery List </Link> </li>
          <li> <Link to='categories' > Grocery Category </Link> </li>
        </ul>
      </nav>

        <Routes>
          <Route path='/' element={<Form/>} />
          <Route path='categories' element={<GroceryCategory/>} />
          <Route path='container' element={<GroceryContainer/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
