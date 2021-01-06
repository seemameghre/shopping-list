import React from 'react'
import useInputState from "../hooks/useInputState"

export default function ManageCategory(props) {
    const {catalog} = props
    const [categoryname, setCategoryname, resetCategoryname] = useInputState("")

    function handleSubmit(e){
        e.preventDefault()
        const newCategory = {
            categoryname: categoryname
        }
        props.addCategory(newCategory)
        resetCategoryname()
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label htmlFor="categoryname">New category</label>
                <input type="text"
                    name="categoryname"
                     value={categoryname}
                     onChange={(e) => setCategoryname(e)}
                     placeholder="Category name" 
                />
                <button>Add Category</button>
            </form>
            <ul>
                {catalog.map(category => 
                    <li key={category._id}>
                        <button onClick={() => props.setCurrentCategoryId(category._id)}>{category.categoryname}</button>
                        <button onClick={() => props.onDelete(category._id)}>-</button>
                    </li>)
                }
            </ul>
        </div>
    )
}