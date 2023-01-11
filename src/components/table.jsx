import React from 'react';
import './table.css';

function Table({ data }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Bus Id</th>
                    <th>Destination</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.vid}>
                        <td>{item.vid}</td>
                        <td>{item.des}</td>
                        <td>{item.lat}</td>
                        <td>{item.lon}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
