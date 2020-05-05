import React, { Component } from 'react';
import PostData from '../data/weddingInvitation.json';
import './listData.css';

class listData extends Component {
    //function to add the table header
    renderTableHeader() {
        let header = Object.keys(PostData[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    //function to add the table data
    renderTableData() {
        return (

            PostData.map((postDetail, index) => {
                const { id, name, RSVP, plusOne } = postDetail // destructuring instead of calling postDetail.name
                return (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{RSVP}</td>
                        <td>{plusOne}</td>
                    </tr>
                )




            })

        )
    }
    //main render function which calls the above data
    render() {
        return (
            <div>
                <h1 id='title'>React Dynamic Table</h1>
                <table id='invitation'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default listData;