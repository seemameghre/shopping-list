import {useState} from "react"

import useInputState from "../hooks/useInputState"

function Item(props){
    const itemname = props.name
    const [selected, setSelected] = useState(false)
    const [quantity, setQuantity, resetQuantity] = useInputState("")
    const [note, setNote, resetNote] = useInputState("")

    function handleCheckbox(e){
        setSelected(e.target.checked)
    }
    function handleSubmit(e){
        e.preventDefault()
        props.addItem({
            itemname,
            quantity,
            note
        })
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="checkbox" value={itemname} onChange={handleCheckbox}/>
                <label htmlFor="{itemname}">{itemname}</label>
                <input type="text" placeholder="Quantity" size="4" name="quantity" value={quantity} onChange={e => setQuantity(e)} disabled={!selected} />
                <input type="text" placeholder="Note" name="note" value={note} onChange={e => setNote(e)} disabled={!selected} />
                <button>+</button>
            </form>
        </>
    )
}
export default Item;