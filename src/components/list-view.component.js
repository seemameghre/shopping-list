import React, {useContext} from 'react'
import {ListsContext} from "../contexts/lists.context"

function ListView(props) {
    
    const {lists,loading} = useContext(ListsContext)

    function findList(id){
        return lists.find(list => list._id === id)
    }
    
    const currentList = findList(props.listId)
    console.log(typeof currentList.shoppingdate)
    return (  
            <div>
                {loading ? <h3>Loading</h3>:
                    <div>
                    <h3>{currentList.description}</h3>
                    
                    {/* <h5>Shopping Date: {currentList.shoppingdate.substring(0,10)}</h5> */}
                    <h5>Shopping Date: {new Date(currentList.shoppingdate).toDateString()}</h5>
                    <table>
                        <tbody>
                    {currentList.items !== undefined && currentList.items.map(item => 
                            (
                                <tr key={item._id}>
                                <td>{item.itemname}</td>
                                <td>{item.quantity}</td>
                                <td>{item.note}</td>
                                </tr>)
                            )
                    }
                    </tbody>
                    </table>
                    </div>
                }
            </div>
            )
        }
export default ListView