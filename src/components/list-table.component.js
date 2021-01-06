import React, {useContext} from 'react'

import {ListsContext} from "../contexts/lists.context"
import ListRow from "./listrow.component"

function ListTable(props){
    // const {lists, loading} = props
    const {lists, loading} = useContext(ListsContext)
    
    return (
        <table>
            <thead>
                <tr>
                <th>Description</th>
                <th>Shopping Date</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {loading ? <tr><td>Loading</td></tr> : lists.map(list => <ListRow list={list} key={list._id}/>)}
            </tbody>
        </table>
    )
}
export default ListTable;
