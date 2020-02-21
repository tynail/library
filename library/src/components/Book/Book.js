import React, { Component } from 'react'
import './Book.css';


class Book extends Component {
    constructor(props){
        super(props);
    };

    render() {
        return(
            <div className="Book">
                <h1>Name: {this.props.name} </h1>
                {/* <div className="Book-img">
                    <img src={} alt={this.props.name}/>
                </div> */}
                <h3>Rating: {this.props.rating}</h3>
            </div>
        )
    }
}
export default Book;