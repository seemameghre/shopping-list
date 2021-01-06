import React, {useContext, useEffect} from 'react'
import {BrowserRouter, Route} from "react-router-dom"
import Navbar from "./navbar.component"
import ListTable from "./list-table.component"
import NewList from "./new-list.component"
import ManageCatalog from "./manage-catalog.component"
import ListView from "./list-view.component"
import {ListsContext} from "../contexts/lists.context"
import {CatalogContext} from "../contexts/catalog.context"

export default function ListApp(props) {
    const {getLists, error} = useContext(ListsContext)

    useEffect(() => {
        getLists()
    },[])

    const {getCatalog} = useContext(CatalogContext)
   
    useEffect(() => {
        getCatalog()
    },[])

    if(error){
        return(<h3>{error}</h3>)
    }
    
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Route path='/' exact render={() => <ListTable />}/>
                <Route path='/newlist' render={() => <NewList />} />
                <Route path="/viewlist/:listId" render={(routeProps) => <ListView listId={routeProps.match.params.listId}/>} />
                <Route path='/managecatalog' component={ManageCatalog} />
                {/* <Route 
                path="/categories/:categoryId" 
                render={(routeProps) => <ManageItems categoryId={routeProps.match.params.categoryId} />} /> */}
            </BrowserRouter>
        </div>
    )
}
