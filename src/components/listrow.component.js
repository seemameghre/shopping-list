import React,{useContext} from "react"
import Button from "react-bootstrap/Button"
import { ListsContext } from "../contexts/lists.context"

function ListRow(props){
    const {_id, description, shoppingdate} = props.list
    const {deleteList} = useContext(ListsContext)

    function viewList(){
        window.location = `/viewlist/${_id}`
    }
    return(
        <tr>
            <td className="text-center align-bottom">{description}</td>
            <td className="text-center align-bottom">{new Date(shoppingdate).toDateString()}</td>
            <td className="text-center align-bottom"><Button variant="secondary" onClick={() => deleteList(_id)}>Delete</Button></td>
            <td className="text-center align-bottom"><Button variant="secondary" onClick={() => viewList()}>View</Button></td>
        </tr>
    )
}
export default ListRow