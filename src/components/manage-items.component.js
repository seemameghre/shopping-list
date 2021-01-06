import React from 'react'
import useInputState from '../hooks/useInputState'

export default function ManageItems(props){
    const items = props.items
    const [itemname, setItemname, resetItemname] = useInputState("")

    function handleSubmit(e){
        e.preventDefault()
        props.addItem(itemname)
        resetItemname()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="itemname">New Item</label>
                <input type="text"
                    name="itemname"
                     value={itemname}
                     onChange={(e) => setItemname(e)}
                     placeholder="Item name" 
                />
                <button>Add Item</button>
            </form>
            {items !== undefined && 
                items.map(item => <li key={item}>{item}<button onClick={()=>props.deleteItem(item)}>x</button></li>)
            }
        </div>
    )
}