import React, { Component } from "react";
import styles from './App.module.scss';
import BookCard from "./components/BookCard";

import books from "./data/books.js";

class App extends Component {
  render() {
    return (
      <section>
        <h1>Books App</h1>
        <h2>Books</h2>
        {books.map(book => {
          return <BookCard book={book} />
        })}
      </section>
    );
  }
}

export default App;