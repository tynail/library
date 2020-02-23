import React, { Component } from 'react'
import './Library.css'
import Section from '../Section/Section';
// import axios from 'axios';


class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            id: 0,
            intervalIsSet: false
        }
    }
    
    // When component mounts
    componentDidMount() {
        this.getDataFromDb();
        console.log('data in state', this.state.data);
    }

    // To kill component
    // componentWillUnmount() {
    //     if (this.state.intervalIsSet) {
    //       clearInterval(this.state.intervalIsSet);
    //       this.setState({ intervalIsSet: null });
    //     }
    // }

    getDataFromDb = () => {
        fetch('http://localhost:3001/book/getBook')
        .then(data => data.json())
        .then(res => this.setState({data: res.data}))
        .then(resAsJson => {
            console.log(resAsJson);
        })
    };

    render() {
        return(
            <div>
                <h1>TESTING integration with Backend</h1>
                
                <Section books={this.state.data} />
            </div>
        )
    }
}

export default Library;