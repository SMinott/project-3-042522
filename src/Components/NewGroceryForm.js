import React, { useState } from "react";


function NewGroceryForm({ handleAddGrocery }) {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
    })

const handleChange = (event) => {
    setFormData ({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

function handleSubmit (e) {
    e.preventDefault()
    const groceryData = {
        name: formData.name,
        category: formData.category,
    }

    fetch('http://localhost:9292/groceries', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(groceryData)
    })
    .then(res => res.json())
    .then((data) => {handleAddGrocery(data)
        setFormData({ 
            name: "",
            category: "",
        })
    })
}


  return (
    <form className="new-grocery-form" onSubmit={handleSubmit}>
        <input 
        name="name"
        onChange={handleChange} 
        placeholder="name" 
        value={formData.name}
        />
      <input
        name="category" 
        onChange={handleChange}
        placeholder="Category"
        value={formData.category} 
        />
      <input type="submit" value="Add to List" />
    </form>
  );
}

export default NewGroceryForm;

