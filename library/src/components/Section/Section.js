import React, { Component } from 'react'
import './Section.css'
import Book from '../Book/Book';
import uuid from 'react-uuid'

class Section extends Component {
    render(){
        return(
            <div className="Section">
                {console.log('PROPS', this.props.books)}
                {this.props.books.map((book) => (
                        <Book 
                        key={uuid()}
                        title={book.title} 
                        genre={book.genre}
                        summary={book.summary}
                        author={book.author}
                        imageUrl={book.imageUrl}
                        />
                ))}
            </div>
        )
    }
}

export default Section;