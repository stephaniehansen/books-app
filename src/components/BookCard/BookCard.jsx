import React, { Component } from "react";
import styles from "./BookCard.module.scss";

class BookCard extends Component {
    render () {
        const {title, author} = this.props.book;
        return (
            <section>
                <h3>{title}</h3>
                <p>{author}</p>
            </section>
        );
    }
}

export default BookCard;