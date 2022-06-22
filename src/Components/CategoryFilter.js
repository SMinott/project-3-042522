import React, {useState} from 'react'

 function CategoryFilter({ category, setCategory }) {
    //  const [category, setCategory] = useState("dairy")


     useEffect(() => {
         fetch("http://localhost:9292/categories")
           .then((r) => r.json())
           .then((category) => setCategory(category));
       }, []);







   return (
     <div className="categories">
         {categoryDropdown}</div>
 )
}

export default CategoryFilter

