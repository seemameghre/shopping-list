import {useContext, useEffect} from "react"
import { CatalogContext } from "../contexts/catalog.context"

function Category({categoryname, items}){
    return(
        <div>
            <h5>{categoryname}</h5>
            {items.map(item => <Item name={item}/>)}
        </div>
    )
}
function Item(props){
    const itemname = props.name
    return(
        <>
            <input type="checkbox" value={itemname}/>
            <label htmlFor="{itemname}">{itemname}</label>
        </>
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
            {catalog.map(category => <Category {...category} />)}
        </div>
    )
}
export default Catalog