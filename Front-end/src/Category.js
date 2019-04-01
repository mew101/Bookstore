import React, { Component } from 'react';
import Book from './Book';
import './Category.css';

export default class Category extends Component {
  saveBook = () => {
    this.props.addNewBook(this.props.categoryId);
  };
  render() {
    const { books, categoryname, name, detailDescription, author } = this.props;
    const listOfBooks = books.map(book => (
      <li key={book.bookId}>
        <Book
          bookId={book.bookId}
          name={book.name}
          author={book.author}
          detailDescription={book.detailDescription}
        />
      </li>
    ));
    return (
      <div className="category">
        <h2>{categoryname}</h2>
        <ul>{listOfBooks}</ul>
        <input className={this.props.categoryId} value={name} type="text" />
        <input className={this.props.categoryId} value={author} type="text" />
        <input value={detailDescription} type="text" />
        <button onClick={this.saveBook}>Create book</button>
      </div>
    );
  }
}
