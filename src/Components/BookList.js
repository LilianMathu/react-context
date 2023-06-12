import React, { Component } from 'react'

class BookList extends Component {
     
    render() { 
        return (
            <div className="booklist">
                <ul>
                    <li>The way of kings</li>
                    <li>The name of the wind</li>
                    <li>The purple hibiscus</li>
                </ul>
            </div>
        );
    }
}
 
export default BookList;