import React, { Component } from 'react'
import './Section.css'
import Book from '../Book/Book';

class Section extends Component {
    render(){
        return(
            <div className="Books-card">
                {this.props.books.map((book) => (
                    <Book 
                    key={book.id}
                    title={book.title}
                    imageUrl={book.imageUrl}
                    author={book.author}
                    />
                ))}
            </div>
        )
    }
}

export default Section;