import {BrowserRouter, Route} from "react-router-dom"

import Container from "@material-ui/core/Container"

import Navbar from "./components/navbar.component"
import ListTable from "./components/list-table.component"
import NewList from "./components/new-list.component"
import ManageCatalog from "./components/manage-catalog.component"
import {ListsProvider} from "./contexts/lists.context"
import {CatalogProvider} from "./contexts/catalog.context"

function App() {
  return (
    <Container maxWidth="md">
    <div className="App">
      <BrowserRouter>
      <ListsProvider>
        <CatalogProvider>
        <Navbar />
        <Route path='/' exact component={ListTable}/>
        <Route path='/newlist' component={NewList} />
        <Route path='/managecatalog' component={ManageCatalog} />
        </CatalogProvider>
        </ListsProvider>
      </BrowserRouter>
    </div>
    </Container>
  );
}

export default App;
