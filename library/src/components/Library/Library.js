import React, { Component } from 'react'
import './Library.css'
import Section from '../Section/Section';
import axios from 'axios';
import hardCodedBooks from './hardCodedBooks';
import NavigationBar from '../NavigationBar/NavigationBar';
import SalesCarousel from './../Carousel/Carousel';
import { Container, Row, Col } from 'reactstrap';

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

            <div className="">
                <Container className="themed-container">>
                    <NavigationBar />
                    <h1>Developping front-end</h1>
                    <SalesCarousel/>
                    <Section books={this.state.books} />
                </Container>
            </div>
        )
    }
}

export default Library;