import React from "react";
import Grocery from "./Grocery";

function GroceryList({ groceryList, handleDeleteGrocery }) {
    const renderGroceries = groceryList.map((grocery) => (
    <Grocery 
      grocery = {grocery} key={grocery.id}
      handleDeleteGrocery={handleDeleteGrocery}
    />
  ))





  return (
    <div className="groceries">
      {renderGroceries}
    </div>
  );
}

export default GroceryList;
