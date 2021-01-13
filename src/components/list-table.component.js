import React, {useContext} from 'react'
import Table from "react-bootstrap/Table"
import {ListsContext} from "../contexts/lists.context"
import ListRow from "./listrow.component"

function ListTable(props){
    const {lists} = useContext(ListsContext)
    
    return (
        <Table className="ml-auto mr-auto" borderless striped size="sm" >
            <thead>
                <tr>
                <th className="text-center">Description</th>
                <th className="text-center">Shopping Date</th>
                <th  className="text-center" colSpan="2">Actions</th>
                </tr>
            </thead>
            <tbody>
            {lists.map(list => <ListRow list={list} key={list._id}/>)}
            </tbody>
        </Table>
    )
}
export default ListTable;
