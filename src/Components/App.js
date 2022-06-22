import React, {useState} from "react";

function Grocery({ grocery, handleDeleteGrocery }) {
    const { id, name, category } = grocery;
    const [ isDone, setIsDone ] = useState(true)
//   const handleClick = () => {
//     onDeleteGrocery(name)
//   }

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
    <h3>{category}</h3>
    <p>{name}</p>
    <button onClick={handleClick}>
      { isDone ? "🗸" : "☑"}
      </button>
      <button className="delete" onClick={handleDelete}>🗑</button>
  </div>
  );
}

export default Grocery;
