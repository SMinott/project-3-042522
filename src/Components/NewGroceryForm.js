import React, { useState, useEffect } from "react";


function NewGroceryForm({ handleAddGrocery , setCategory, category }) {
    const [selectCategory, setSelectedCategory] = useState("")
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        })


const handleDropdown = (event) => {
    setSelectedCategory ({
        ...selectCategory,
        [event.target.name]: event.target.value
    })
}
const handleChange = (event) => {
    setFormData ({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
        useEffect(() => {
            fetch("http://localhost:9292/categories")
              .then((r) => r.json())
              .then((category) => setCategory(category));
          }, []);

function handleSubmit (e) {
    e.preventDefault()
    const groceryData = {
        name: formData.name,
        category: formData.category,
        category_id: formData.category_id
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
            category_id: "",
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
        <select>
        {category?.map((cat) => 
        <option onChange={handleDropdown} value={cat.name}>{cat.name}</option>)}


        </select> 
      <input type="submit" value="Add to List" />
    </form>
  );
}

export default NewGroceryForm;


// {category?.map((cat) => 
    // <option onChange={handleDropdown} value={cat.name}>{cat.name}</option>)}