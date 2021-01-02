import React from 'react'

export default function ListPreview(props) {
const {description, selectedItems} = props
    return (
        <div>
            <h3>Preview</h3>
            <h4>{description}</h4>
            <table>
                    <tbody>
                    {selectedItems !== undefined && selectedItems.map(item => 
                            (
                                <tr key={item.itemname}>
                                <td>{item.itemname}</td>
                                <td>{item.quantity}</td>
                                <td>{item.note}</td>
                                </tr>)
                            )
                    }
                    </tbody>
                    </table>
        </div>
    )
}
