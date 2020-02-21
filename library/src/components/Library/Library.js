import React, { Component } from 'react'
import './Library.css'
import Section from '../Section/Section';


class Library extends Component {
    // static defaultProps = {
    //     type: ['Roman', 'Manga', 'psychology','horror']
    // }
    static defaultProps = {
        manga:[
            {name:"Fairy Tail", id:1, rating:"8/10"},
            {name:"Hajime no Ippo", id:2, rating:"8/10"},
            {name:"Death Note Black edition", id:3, rating:"8/10"},
            {name:"One Piece", id:4, rating:"8/10"},
        ],
        roman:[
            {name:"l'Outsider", id:5, rating:"9/10"},
            {name:"Aliss", id:6, rating:"9/10"},
            {name:"11/22/63", id:7, rating:"8/10"},
            {name:"Le vide", id:8, rating:"9/10"}
        ]
    };

    render(){
        let manga = [...this.props.manga];
        let roman = [...this.props.roman];
        return(
            <div>
                <Section books={manga}/>
                <Section books={roman}/>
            </div>
        )
    }
}

export default Library;