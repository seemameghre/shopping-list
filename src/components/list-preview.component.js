import React from 'react'
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"

export default function ListPreview(props) {
const {description, shoppingdate, selectedItems} = props
    return (
            <Table size="sm" borderless striped variant="warning" className="p-1">                       
                <thead>
                    <tr key="desc"><th colSpan="3" className="text-center">{description}</th></tr>
                    <tr key="date">
                        <th colSpan="3" className="text-center">
                            Shopping Date: {new Date(shoppingdate).toDateString()}
                        </th>
                    </tr>
                    <tr key="header">
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
                            <td><Button size="sm" onClick={() => props.deleteItem(item.id)}>-</Button></td>
                        </tr>)
                    )
                }
                </tbody>
            </Table>
    )
}
