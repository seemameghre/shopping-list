import React, { useContext, useState } from 'react'
import {ListsContext} from "../contexts/lists.context"
import Catalog from "./catalog.component"
import ListPreview from "./list-preview.component"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function NewList(props){
    const {addList, error} = useContext(ListsContext)

    const [description, setDescription] = useState('Grocery List')
    const [shoppingdate, setShoppingdate] = useState(new Date())
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
    if(error){
        return(<h3>{error}</h3>)
    }
    return(
        <Container>
            <Row><Col>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Description</Form.Label>
                <Form.Control 
                size="sm"
                    as="input"
                    name="description" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} 
                />
                <Form.Label>Shopping Date</Form.Label>
                <DatePicker selected={shoppingdate} onChange={date => setShoppingdate(date)} />
                <Button type="submit">Save List</Button>
            </Form>
            </Col></Row>
            <Row>
                <Col><Catalog addItem={addItem} selectedItems={selectedItems}/></Col>
                <Col><ListPreview description={description} shoppingdate={shoppingdate} selectedItems={selectedItems} /></Col>
            </Row>
        </Container>
    )
}
export default NewList