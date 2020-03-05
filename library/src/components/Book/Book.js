import React, { Component } from 'react'
import './Book.css';


class Book extends Component {
    constructor(props){
        super(props);
    };

    render() {
        let imageUrl = this.props.imageUrl;
        return(
            <div className="Book">
                <h1>Name: {this.props.title} </h1>
                <div className="Book-img">
                    <img src={imageUrl} alt={this.props.title}/>
                </div>
                <h3>Author: {this.props.author}</h3>
                <h3>Genre: {this.props.genre}</h3>
                <p>Summary: {this.props.summary}</p>
            </div>
        )
    }
}
export default Book;