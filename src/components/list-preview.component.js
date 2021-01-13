import React from 'react'
import Table from "react-bootstrap/Table"

export default function ListPreview(props) {
const {description, shoppingdate, selectedItems} = props
    return (
            <Table size="sm" borderless striped variant="warning">                       
                <thead>
                    <tr><th colSpan="3" className="text-center">{description}</th></tr>
                    <tr><th colSpan="3" className="text-center">
                        Shopping Date: {new Date(shoppingdate).toDateString()}
                    </th></tr>
                    <tr>
                        <th className="text-center">Item</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-center">Note</th>
                    </tr>
                </thead>
                <tbody>
                {selectedItems !== undefined && selectedItems.map(item => 
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
    )
}
