import React from 'react'

function Form() {
  return (
    <div>
      <h2>CRUD Activities go here</h2>
    </div>
  )
}

export default Form



// import React, { useState } from "react";


// function NewGroceryForm({ categories, onGroceryFormSubmit }) {
//   const [name, setName] = useState("")
//   const [category, setCategory] = useState("")

// //   const handleSubmit = (e) => {
// //     e.preventDefault()
// //     onGroceryFormSubmit({ text, category })
// //     setText("")
// //   }

// function handleSubmit (e) {
//     e.preventDefault();
//     const groceryData = {
//         name: name,
//         category: category,
//     }
//     fetch('http://localhost:9292/groceries', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(groceryData),
//     })
//     .then(res => res.json())
//     .then((newGrocery) => {
//         onGroceryFormSubmit(newGrocery);
//     })
// }


//   return (
//     <form className="new-grocery-form" onSubmit={handleSubmit}>
//       <label>
//         Grocery:
//         <input 
//         type="text" 
//         name="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)} 
//         />
//       </label>
//       <label>
//         Category
//         <select 
//         name="category" 
//         value={category} 
//         onChange={(e) => setCategory(e.target.value)}>
  
//           {categories.map((cat) => (
//             <option key={cat}>{cat}</option>
//           ))}

//         </select>
//       </label>
//       <input type="submit" value="Add grocery" />
//     </form>
//   );
// }

// export default NewGroceryForm;


