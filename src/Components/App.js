import React, { useState, useEffect } from "react";
import NewGroceryForm from "./NewGroceryForm";
import GroceryList from "./GroceryList";


function App() {
  const [groceryList, setGroceryList] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/groceries")
      .then((r) => r.json())
      .then((groceryList) => setGroceryList(groceryList));
  }, []);

  const handleAddGrocery = (newGrocery) => {
    setGroceryList([...groceryList, newGrocery])
  }

  const handleDeleteGrocery = (groceryToDelete) => {
    setGroceryList(groceryList.filter((grocery) => grocery.id !== groceryToDelete))
  }


  const[show, setShow] = useState(true)

  function handleClick() {
    setShow(show => !show)
  }
  // const groceryListToDisplay = groceryList.filter((grocery) => grocery.category === category)
  // // const groceryListToDisplay = groceryList.filter((grocery) => category === "All" || grocery.category === category)

  


  return (
    <div className="app">
    <div className="sidebar">
      <button onClick = {handleClick}>Grocery List</button>
      {show ? <NewGroceryForm handleAddGrocery={handleAddGrocery} /> : null}
    </div>
        <GroceryList groceryList={groceryList} handleDeleteGrocery={handleDeleteGrocery}/>
      </div>
    );
  }


//     <div className="App">
//       <h2>My groceryList</h2>
//       <CategoryFilter 
//         categories={category}
//         selectedCategory={category}
//         onSelectCategory={setCategory}
//       />
//       <NewGroceryForm 
//         categories={category.filter((cat) => cat)}
//         // categories={category.filter((cat) => cat !== "All")}
//         // categories={category}
//         onGroceryFormSubmit={handleAddGrocery}
//       />
//       <GroceryList groceryList={groceryListToDisplay} onDeleteGrocery={handleDeleteGrocery}/>
//     </div>
//   );
// }

export default App;











// import { CATEGORIES, groceryList } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, groceryList });
