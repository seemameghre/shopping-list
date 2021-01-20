import {ListsProvider} from "./contexts/lists.context"
import {CatalogProvider} from "./contexts/catalog.context"
import {MessageProvider} from "./contexts/message.context"
import ListApp from "./components/list-app.component"

function App() {
  return (
    
    <div>
      <ListsProvider>
        <CatalogProvider>
          <MessageProvider>
          <ListApp />
          </MessageProvider>
        </CatalogProvider>
        </ListsProvider>
    </div>
    
  );
}

export default App;