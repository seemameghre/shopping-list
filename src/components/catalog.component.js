import {useContext, useEffect, useState} from "react"
import { CatalogContext } from "../contexts/catalog.context"
import Item from "./item.component"

function Category({categoryname, items, addItem}){
    return(
        <div>
            <h5>{categoryname}</h5>
            {items.map(item => <Item name={item} addItem={addItem}/>)}
        </div>
    )
}

function Catalog(props){
    const {catalog, getCatalog} = useContext(CatalogContext)
   
    useEffect(() => {
        getCatalog()
    },[])
    return(
        <div>
            <h3>Categories:</h3>
            {catalog.map(category => <Category {...category} addItem={props.addItem} />)}
        </div>
    )
}
export default Catalog