import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import GroceryCategory from './GroceryList';
import GroceryContainer from './CategoryFilter';
import Form from './NewGroceryForm'


function App() {
  const[ list, setlist] = useState([])


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
          <Route path='categories' element={<GroceryCategory />} />
          <Route path='container' element={<GroceryContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;







// import React, { useState } from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewGroceryForm from "./NewGroceryForm";
// import GroceryList from "./GroceryList";

// // import { CATEGORIES, GROCERIES } from "../data";
// // console.log("Here's the data you're working with");
// // console.log({ CATEGORIES, GROCERIES });

// function App() {
//   const [groceries, setGroceries] = useState([])
//   const [category, setCategory] = useState([])

//   useEffect(() => {
//     fetch("http://localhost:9292/groceries")
//       .then((r) => r.json())
//       .then((groceries) => setGroceries(groceries));
//   }, []);



//   const handleAddGrocery = (newGrocery) => {
//     setGroceries([...groceries, newGrocery])
//   }

//   const handleDeleteGrocery = (groceryToDelete) => {
//     setGroceries(groceries.filter((grocery) => grocery.id !== groceryToDelete))
//   }

//   const groceriesToDisplay = groceries.filter((grocery) => category === "All" || grocery.category === category)

//   return (
//     <div className="App">
//       <h2>My Groceries</h2>
//       <CategoryFilter 
//         categories={category}
//         selectedCategory={category}
//         onSelectCategory={setCategory}
//       />
//       <NewGroceryForm 
//         categories={category.filter((cat) => cat !== "All")}
//         onGroceryFormSubmit={handleAddGrocery}
//       />
//       <GroceryList groceries={groceriesToDisplay} onDeleteGrocery={handleDeleteGrocery}/>
//     </div>
//   );
// }

// export default App;
