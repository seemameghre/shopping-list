import React, { useContext, useState } from 'react'
import {ListsContext} from "../contexts/lists.context"
import Catalog from "./catalog.component"
import ListPreview from "./list-preview.component"


function NewList(props){
    const {addList, error} = useContext(ListsContext)

    const [description, setDescription] = useState('Grocery List')
    const [selectedItems, setSelectedItems] = useState([])

    function handleSubmit(e){
        e.preventDefault()

        const newList = {
            description:description,
            shoppingdate: new Date(),
            items: selectedItems
        }
        addList(newList)
        window.location = "/"
    }
    function addItem(newItem){
        setSelectedItems([...selectedItems, newItem])
    }
    if(error){
        return(<h3>{error}</h3>)
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
        <Catalog addItem={addItem} />
        <ListPreview description={description} selectedItems={selectedItems} />
        </>
    )

}
export default NewList


