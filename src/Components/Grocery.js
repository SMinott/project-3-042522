import React from 'react'

function GroceryItem({ item }) {

    const { category, foodItem} = item
  return (
    <div>
      <h2>Grocery Items will be listed here</h2>
    </div>
  )
}

export default GroceryItem



//  import React from "react";

// function Grocery({ id, text, category, onDeleteGrocery }) {

// //   const handleClick = () => {
// //     onDeleteGrocery(text)
// //   }

//   const handleDelete = () => {
//       fetch(`http://localhost:9292/groceries/${id}`, {
//           method: "DELETE"
//       })
//       onDeleteGrocery(id)
//   }

//   return (
//     <div className="grocery">
//       <div className="label">{category}</div>
//       <div className="text">{text}</div>
//       <button className="delete" onClick={handleDelete}>🗑</button>
//     </div>
//   );
// }

// export default Grocery;
