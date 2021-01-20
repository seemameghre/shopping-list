import {useState} from "react"
import InputGroup from "react-bootstrap/InputGroup"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import useInputState from "../hooks/useInputState"
import {uuid} from "uuidv4"

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
            id:uuid(),
            itemname,
            quantity,
            note
        })
        resetQuantity()
        resetNote()
    }

    return(
        <Form onSubmit={handleSubmit}>
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Checkbox onChange={handleCheckbox}/>
                <Form.Label>{itemname}</Form.Label>
            </InputGroup.Prepend>
            <Form.Control placeholder="Qty" 
                disabled={!selected} 
                maxLength={4}
                name="quantity" 
                value={quantity} 
                onChange={e => setQuantity(e)} 
            />
            <Form.Control placeholder="Note" 
                disabled={!selected} 
                maxLength={20}
                name="note" 
                value={note} 
                onChange={e => setNote(e)} 
            />
            <InputGroup.Append>
                <Button disabled={!selected} variant="secondary" type="submit">Add</Button>
            </InputGroup.Append>
        </InputGroup>
        </Form>
    )
}
export default Item;