import React, { Component } from "react";
import styles from "./BookCard.module.scss";

class BookCard extends Component {
    render () {
        const {title, author, coverImg} = this.props.book;
        return (
            <div className={styles.bookCard}>
                <img src={coverImg} alt={title} />
                <h3>{title}</h3>
                <p>{author}</p>
            </div>
        );
    }
}

export default BookCard;