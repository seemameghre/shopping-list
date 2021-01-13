import React from 'react'
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function CategoryCardHeader({category, onDelete}) {
 
    return (
            <Row className="align-items-end">
            <Col>{category.categoryname}</Col>
            <Col><Button variant="warning" onClick={() => onDelete(category._id)}>Delete Category</Button></Col>
            </Row>
    )
}