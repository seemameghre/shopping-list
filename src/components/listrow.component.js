import React,{useContext} from "react"
import { ListsContext } from "../contexts/lists.context"

function ListRow(props){
    const {_id, description, shoppingdate} = props.list
    const {deleteList} = useContext(ListsContext)

    return(
        <tr style={{padding:"10px"}}>
            <td style={{padding:"10px"}}>{description}</td>
            <td style={{padding:"10px"}}>{shoppingdate.substring(0,10)}</td>
            <td><button onClick={() => deleteList(_id)}>Delete</button></td>
        </tr>
    )
}
export default ListRow