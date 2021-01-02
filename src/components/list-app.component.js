import React, {useContext, useEffect} from 'react'
import {BrowserRouter, Route} from "react-router-dom"
import Navbar from "./navbar.component"
import ListTable from "./list-table.component"
import NewList from "./new-list.component"
import ManageCatalog from "./manage-catalog.component"
import ListView from "./list-view.component"
import {ListsContext} from "../contexts/lists.context"

export default function ListApp(props) {
    const {lists, getLists, error, loading} = useContext(ListsContext)

    useEffect(() => {
        getLists()
    },[])
    if(error){
        return(<h3>{error}</h3>)
    }
    
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Route path='/' exact render={() => <ListTable lists={lists} error={error} loading={loading}/>}/>
                <Route path='/newlist' component={NewList} />
                <Route path="/viewlist/:listId" render={(routeProps) => <ListView listId={routeProps.match.params.listId}/>} />
                <Route path='/managecatalog' component={ManageCatalog} />
            </BrowserRouter>
        </div>
    )
}
