import React, { Component } from "react";
import styles from './App.module.scss';
import BookCard from "./components/BookCard";

import books from "./data/books.js";

class App extends Component {
  render() {
    return (
    <>
      <header>
        <h1>Books App</h1>
      </header>
      <main>
        <h2>Books</h2>
        <section className={styles.content}>
          {books.map(book => {
            return <BookCard book={book} />
          })}
        </section>
      </main>
    </>
    );
  }
}

export default App;