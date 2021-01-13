import React from 'react'
import useInputState from "../hooks/useInputState"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"

export default function NewCategoryForm(props) {
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
        <Form onSubmit={handleSubmit}>
            <Form.Row className="m-1">
                <Col>
                <Form.Control 
                    as="input"
                    name="categoryname"
                    value={categoryname}
                    onChange={(e) => setCategoryname(e)}
                    placeholder="New Category Name" 
                />
                </Col>
                <Col>
                <Button type="submit" variant="secondary">Add New Category</Button>
                </Col>
            </Form.Row>
            </Form>
    )
}
