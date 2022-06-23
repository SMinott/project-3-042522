import React, {useEffect, useState} from "react";

function Grocery({ grocery, handleDeleteGrocery }) {
    const { id, name } = grocery;
    const [ isDone, setIsDone ] = useState(true)
//   const handleClick = () => {
//     onDeleteGrocery(name)
//   }

useEffect(() => {
    console.log(grocery)
}, [])

    const handleClick = () => {
        setIsDone(isDone => !isDone)
    }

  const handleDelete= () => {
      fetch(`http://localhost:9292/groceries/${id}`, {
          method: "DELETE"
      })
      handleDeleteGrocery(id)
  }


  

  return (

    <div>
    <h2>{name}</h2>
    <h3>{grocery.category && grocery.category["name"]}</h3>
    <button className="checkmark" onClick={handleClick}>
      { isDone ? "🗸" : "☑"}
      </button>
      <button className="delete" onClick={handleDelete}>🗑</button>
  </div>
  );
}

export default Grocery;
