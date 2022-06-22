import React from 'react'

function GroceryCategory() {
  // const renderCategory = ____.map(item => (<button onClick={handleClickCat} key={item}> {item} </button>))

  return (
    <div>
      <h2>Choose Grocery Category</h2>
      {/* {renderCategory} */}
    </div>
  )
}

export default GroceryCategory






// import React from "react";
// import Grocery from "./Grocery";

// function GroceryList({ groceries, onDeleteGrocery }) {
    

//   const groceryList = groceries.map((grocery) => (
//     <Grocery 
//       key={grocery.id}
//       text={grocery.text}
//       category={grocery.category}
//       onDeleteGrocery={onDeleteGrocery}
//     />
//   ))





//   return (
//     <div className="groceries">
//       {groceryList}
//     </div>
//   );
// }

// export default GroceryList;
