import React, { useContext, useState } from 'react'
import {ListsContext} from "../contexts/lists.context"
import Catalog from "./catalog.component"
import ListPreview from "./list-preview.component"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {MessageContext} from "../contexts/message.context"

function NewList(props){
    const {addList, error} = useContext(ListsContext)
    const {sendMessage} = useContext(MessageContext)

    const [description, setDescription] = useState('Grocery List')
    const [shoppingdate, setShoppingdate] = useState(new Date().toISOString().substring(0,10))
    const [selectedItems, setSelectedItems] = useState([])

    function handleSubmit(e){
        e.preventDefault()

        const newList = {
            description:description,
            shoppingdate,
            items: selectedItems
        }
        addList(newList)
        window.location = "/"
    }
    function addItem(newItem){
        setSelectedItems([...selectedItems, newItem])
    }
    function deleteItem(id){
        setSelectedItems(selectedItems.filter(item => item.id !== id))
    }
    function sendMsg(){
        console.log("About to call util fn")
        sendMessage({description:description,
            shoppingdate,
            items: selectedItems})
        console.log("After util fn")
    }
    if(error){
        return(<h3>{error}</h3>)
    }
    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Row>
                    <Col>
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        size="sm"
                        as="input"
                        name="description" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                    </Col>
                    <Col>
                        <Form.Label>Shopping Date</Form.Label>
                        <Form.Control 
                            size="sm" 
                            type="date"
                            name="shoppingdate"
                            value={shoppingdate}
                            onChange={e => setShoppingdate(e.target.value)} 
                        />
                    </Col>
                    <Col>
                        <Button type="submit">Save List</Button>
                    </Col>
                    <Col>
                        <Button onClick={sendMsg}>Send Message</Button>
                    </Col>
                </Form.Row>
            </Form>
            <Row>
                <Col className="p-1"><Catalog addItem={addItem} selectedItems={selectedItems}/></Col>
                <Col className="p-1">
                    <ListPreview 
                        description={description} 
                        shoppingdate={shoppingdate} 
                        selectedItems={selectedItems} 
                        deleteItem={deleteItem}
                    />
                </Col>
            </Row>
        </Container>
    )
}
export default NewList