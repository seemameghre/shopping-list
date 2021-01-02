import React, {useContext} from 'react'
import {ListsContext} from "../contexts/lists.context"

function ListView(props) {
    
    const {lists,loading} = useContext(ListsContext)

    function findList(id){
        // console.log(lists)
        return lists.find(list => list._id === id)
    }
    
    const currentList = findList(props.listId)
    console.log(currentList)
    // const {description, shoppingdate, items} = currentList
    
    return (  
            <div>
                {loading ? <h3>Loading</h3>:
                    <div>
                    <h3>{currentList.description}</h3>
                    <h5>{currentList.shoppingdate}</h5>
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