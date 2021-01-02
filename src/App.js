import Container from "@material-ui/core/Container"

import {ListsProvider} from "./contexts/lists.context"
import {CatalogProvider} from "./contexts/catalog.context"
import ListApp from "./components/list-app.component"

function App() {
  return (
    <Container maxWidth="md">
    <div className="App">
      <ListsProvider>
        <CatalogProvider>
          <ListApp />
        </CatalogProvider>
        </ListsProvider>
    </div>
    </Container>
  );
}

export default App;