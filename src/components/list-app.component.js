/* This is starting component.
    It calls context get functions to load lists and catalog,
    and defines routes */
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
    const {getLists, error: listError} = useContext(ListsContext)

    useEffect(() => {
        getLists()
    },[])

    const {getCatalog, error:catalogError} = useContext(CatalogContext)
   
    useEffect(() => {
        getCatalog()
    },[])

    if(listError){
        return(<h3>{listError}</h3>)
    }else if(catalogError){
        return(<h3>{catalogError}</h3>)
    }
    
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Route path='/' exact render={() => <ListTable />}/>
                <Route path='/newlist' render={() => <NewList />} />
                <Route path="/viewlist/:listId" render={(routeProps) => <ListView listId={routeProps.match.params.listId}/>} />
                <Route path='/managecatalog' component={ManageCatalog} />
            </BrowserRouter>
        </div>
    )
}
