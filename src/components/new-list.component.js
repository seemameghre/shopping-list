import React, { useContext, useState } from 'react'
import {ListsContext} from "../contexts/lists.context"
import Catalog from "./catalog.component"

function NewList(props){
    const {addList} = useContext(ListsContext)

    const [description, setDescription] = useState('')

    function handleSubmit(e){
        e.preventDefault()

        const newList = {
            // username:"seema",
            description:description,
            shoppingdate: new Date()
        }
        addList(newList)
        window.location = "/"
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <h2>Add New List</h2>
            <label htmlFor="description">Description</label>
            <input 
                type="text" 
                name="description" 
                value={description}
                onChange={(e) => setDescription(e.target.value)} 
            />
            <label>Shopping Date</label>
            <button>Add List</button>
        </form>
        <Catalog />
        </>
    )

}
export default NewList


