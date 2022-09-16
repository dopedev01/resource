import React from 'react'
import ClientData from './Clientdata'
import './client.css';
export default function Client() {
    const Display = ClientData.map((info) => {
        return (
            <tr>
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>{info.city}</td>
                <td>{info.phone}</td>
                <td>{info.type}</td>
                <td>{info.Model}</td>
                <td>{info.Vname}</td>

            </tr>
        )
    })
    return (
        <div className='tab'>
            <table >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>CITY</th>
                        <th>PHONE</th>
                        <th>VEHICLE_TYPE</th>
                        <th>MODEL</th>
                        <th>VEHICLE_NAME</th>


                    </tr>
                </thead>
                <tbody>{Display}</tbody>
            </table>
        </div>
    )
}