import React, {useContext} from 'react'
import Table from "react-bootstrap/Table"
import {ListsContext} from "../contexts/lists.context"

function ListView(props) {
    
    const {lists, loading} = useContext(ListsContext)
 
    const currentList = lists.find(list => list._id === props.listId)
    
    return (  
            <div>
                {loading ? <h3>Loading</h3> :
                <div>
                    <Table size="sm" borderless striped variant="warning">                       
                        <thead>
                            <tr><th colSpan="3" className="text-center">{currentList.description}</th></tr>
                            <tr><th colSpan="3" className="text-center">
                                Shopping Date: {new Date(currentList.shoppingdate).toDateString()}
                            </th></tr>
                            <tr>
                                <th className="text-center">Item</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-center">Note</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                        {currentList.items !== undefined && currentList.items.map(item => 
                            (
                                <tr key={item._id}>
                                <td className="text-center">{item.itemname}</td>
                                <td className="text-right">{item.quantity}</td>
                                <td className="text-left">{item.note}</td>
                                </tr>)
                            )
                    }
                    </tbody>
                    </Table>
                </div>
                }
            </div>
            )
        }
export default ListView