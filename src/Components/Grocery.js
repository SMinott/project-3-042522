import React, {useEffect, useState} from "react";

function Grocery({ grocery, handleDeleteGrocery }) {
    const { id, name, category_id } = grocery;
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
    // <div className="grocery">
    //   <div className="label">{category}</div>
    //   <div className="name">{name}</div>
    //   <button className="delete" onClick={handleDelete}>🗑</button>
    // </div>

    <div>
    <h2>{name}</h2>
    <h3>{grocery.category && grocery.category["name"]}</h3>
    <button onClick={handleClick}>
      { isDone ? "🗸" : "☑"}
      </button>
      <button className="delete" onClick={handleDelete}>🗑</button>
  </div>
  );
}

export default Grocery;
