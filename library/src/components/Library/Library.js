import React, { Component } from 'react'
import './Library.css'
import Section from '../Section/Section';
import axios from 'axios';
import hardCodedBooks from './hardCodedBooks';
import NavigationBar from '../Navbar/Navbar';

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: hardCodedBooks,
            author: {firstname: 'Stephen', lastname: 'King', age: 73},
            id: 0,
            intervalIsSet: false
        }
    }
    
    // When component mounts
    // componentDidMount() {
    //     this.getBooks();
    //     console.log('data in state', this.state.data);
    // }

    // To kill component
    // componentWillUnmount() {
    //     if (this.state.intervalIsSet) {
    //       clearInterval(this.state.intervalIsSet);
    //       this.setState({ intervalIsSet: null });
    //     }
    // }

    getBooks = () => {
        axios.get('http://localhost:3001/book/getBooks')
        .then(res => { 
            console.log('SOUPE OPERA!!', res);
            this.setState({books: res.data.books});
        })
    };

    render() {
        return(
            <div>
                <NavigationBar />
                <h1>TESTING integration with Backend</h1>
                <Section books={this.state.books} />
            </div>
        )
    }
}

export default Library;