import React from 'react'
export const Table=(props)=>{
    return(
        <tr>
            <td>{props.Name}</td>
            <td>{props.Father}</td>
            <td>{props.DateOfBirth}</td>
            <td>{props.Address}</td>
            <td>{props.Email}</td>
            <td>{props.Phone}</td>
            <td>{props.Aadhar}</td>
        </tr>
    )
}