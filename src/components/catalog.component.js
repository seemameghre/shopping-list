import {useContext} from "react"
import { CatalogContext } from "../contexts/catalog.context"
import Item from "./item.component"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Alert from "react-bootstrap/Alert"

function Catalog(props){
    const {catalog} = useContext(CatalogContext)
    return(
        <Accordion>
            {catalog.map((category,i) => 
                <Card key={i} >
                    <Card.Header  className="p-1 text-justify">
                    <Accordion.Toggle className="m-1 p-1" as={Alert} variant="link" eventKey={category._id}>
                        {category.categoryname}
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={category._id}>
                    <Card.Body className="p-1 m-1">
                        {category.items.map(item => <Item key={item} name={item} addItem={props.addItem}/>)}
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>)
            }
        </Accordion>
    )
}
export default Catalog