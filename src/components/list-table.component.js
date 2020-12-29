import React, { useContext, useEffect } from 'react'

import {ListsContext} from "../contexts/lists.context"
import ListRow from "./listrow.component"

function ListTable(props){
    const {lists, getLists, error, loading} = useContext(ListsContext)

    useEffect(() => {
        getLists()
    },[])
    
    return (
        <>
            {error}
            <thead>
                <th>Description</th>
                <th>Shopping Date</th>
                <th>Actions</th>
            </thead>
            {loading ? <h3>Loading</h3> : lists.map(list => <ListRow list={list} key={list._id}/>)}
        </>
    )
}
export default ListTable;
