import React from 'react'

import ListRow from "./listrow.component"

function ListTable(props){
    const {lists, loading} = props
    
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
