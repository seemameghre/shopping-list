import React from 'react'
import useInputState from '../hooks/useInputState'
import CardDeck from "react-bootstrap/CardDeck"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"

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
            <Form onSubmit={handleSubmit}>
            <Form.Row>
                <Col>
                <Form.Control 
                    name="itemname"
                    placeholder="New Item Name" 
                    as="input"
                    value={itemname}
                    onChange={(e) => setItemname(e)}
                />
                </Col>
                <Col>
                <Button type="submit" variant="secondary">Add New Item</Button>
                </Col>
            </Form.Row>
            </Form>
            
            <CardDeck>
            {items !== undefined && 
                items.map((item,i) =>  
                <Card  style={{ minWidth: '12rem', maxWidth:'12rem' }}>
                     <Card.Body className="p-1 m-1 text-center " key={i}>
                         <Row className="align-items-end">
                             <Col >{item}</Col>
                             <Col><Button variant="secondary" size="sm" onClick={()=>props.deleteItem(item)}>x</Button></Col>
                         </Row>
                    
                    </Card.Body>
                </Card>)
            }
            </CardDeck>
        </div>
    )
}