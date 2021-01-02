import React,{useContext} from "react"
import { ListsContext } from "../contexts/lists.context"

function ListRow(props){
    const {_id, description, shoppingdate} = props.list
    const {deleteList} = useContext(ListsContext)
    // console.log(lists)

    function viewList(){
        window.location = `/viewlist/${_id}`
    }
    return(
        <tr style={{padding:"10px"}}>
            <td style={{padding:"10px"}}>{description}</td>
            <td style={{padding:"10px"}}>{shoppingdate.substring(0,10)}</td>
            <td><button onClick={() => deleteList(_id)}>Delete</button></td>
            <td><button onClick={() => viewList()}>View</button></td>
        </tr>
    )
}
export default ListRow