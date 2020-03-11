import React, { Component } from "react";
import "./Book.css";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from "reactstrap";

class Book extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const summary = this.props.summary.slice(0, 200);
        return (
            <div className="Book">
                <Card>
                    <CardImg
                        top
                        width="100%"
                        src={this.props.imageUrl}
                        alt={this.props.title}
                    />
                    <CardBody>
                        <CardTitle>{this.props.author}</CardTitle>
                        <CardSubtitle>{this.props.genre}  </CardSubtitle>
                        <CardText>{summary}...</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
export default Book;
