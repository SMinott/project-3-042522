import React from 'react'
import GroceryItem from './Grocery'

function GroceryContainer() {

  // const renderList = ____ .map((item) => {
  //   return <GroceryItem key={item.id} item={item} />
  // })

  return (
    <div>
      {/* {renderList} */}
    </div>
  )
}


export default GroceryContainer


// import React from "react";

// function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {

//   const categoryButtons = categories.map((category) => {
//     const className = category === selectedCategory ? "selected" : null;
  
//   return (
//     <button key={category} className={className} onClick={() => onSelectCategory(category)}>
//       {category}
//     </button>
//   )
//   })

//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {categoryButtons}
//     </div>
//   );
// }

// export default CategoryFilter;
