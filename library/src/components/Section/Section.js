import React, { Component } from 'react'
import './Section.css'
import Book from '../Book/Book';

class Section extends Component {
    render(){
        return(
            <div className="Books-card">
                {this.props.books.map((book) => (
                    <Book 
                    name={book.name}
                    id={book.id}
                    rating={book.rating}
                    />
                ))}
            </div>
        )
    }
}

export default Section;