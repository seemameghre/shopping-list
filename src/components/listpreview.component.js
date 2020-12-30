import React from 'react'

export default function ListPreview(props) {
    const {description, selectedItems} = props
    return (
        <div>
            <h3>{description}</h3>
            {/* <h5>{shoppingdate}</h5>*/}
            <p>{selectedItems.map(item => {
                    return(
                        <tr>
                        <td>{item.itemname}</td>
                        <td>{item.quantity}</td>
                        <td>{item.note}</td>
                        </tr>)
                    })
                }
            </p>
        </div>
    )
}