import React,{useContext, useState} from 'react'
import Container from "react-bootstrap/Container"
import Accordion from "react-bootstrap/Accordion"
import Alert from "react-bootstrap/Alert"
import Card from "react-bootstrap/Card"
import CategoryCardHeader from "./category-card-header.component"
import {CatalogContext} from "../contexts/catalog.context"
import ManageItems from './manage-items.component'
import NewCategoryForm from './new-category-form.component'

export default function ManageCatalog(props) {
    const {catalog, loading, addCategory, deleteCategory, updateCategory} = useContext(CatalogContext)
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0)
   
    function onDelete(id){
        const deletedCategoryIndex = catalog.findIndex(category => category._id === id)
        //if deleting first category, set current category to 2nd category
        //Otherwise set current category to first category in catalog
        if(deletedCategoryIndex === 0){
            setCurrentCategoryIndex(1)
        }else{
            setCurrentCategoryIndex(0)
        }
        deleteCategory(id)
    }
    function addItem(newItem){
        let currentCategory = {...catalog[currentCategoryIndex]}
        currentCategory = {...currentCategory, items:[...currentCategory.items, newItem]} 
        updateCategory(currentCategory)
    }
    function deleteItem(deletedItem){
        let currentCategory = {...catalog[currentCategoryIndex]}
        currentCategory = {...currentCategory, items: currentCategory.items.filter(item => item !== deletedItem)}
        updateCategory(currentCategory)
    }
    return (
        <div>
            {loading ? <h3>Loading...</h3> :
                <Container>
                    <NewCategoryForm addCategory={addCategory} />
    
                    <Accordion>
                    {catalog.map((category,i) => 
                        <Card key={i} onClick={() => setCurrentCategoryIndex(i)}>
                            <Card.Header className="p-1 text-justify">
                            <Accordion.Toggle className="m-1 p-1" as={Alert} variant="link" eventKey={category._id}>
                                <CategoryCardHeader category={category} onDelete={onDelete} />
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={category._id}>
                            <Card.Body className="p-1 m-1">
                            <ManageItems items={ catalog[currentCategoryIndex] === undefined ? [] : catalog[currentCategoryIndex].items} 
                                addItem={addItem}
                                deleteItem={deleteItem}
                            />
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )
                    }
                    </Accordion>
                </Container>
            }
        </div>
    )
}