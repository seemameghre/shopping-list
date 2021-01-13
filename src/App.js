import {ListsProvider} from "./contexts/lists.context"
import {CatalogProvider} from "./contexts/catalog.context"
import ListApp from "./components/list-app.component"

function App() {
  return (
    
    <div>
      <ListsProvider>
        <CatalogProvider>
          <ListApp />
        </CatalogProvider>
        </ListsProvider>
    </div>
    
  );
}

export default App;