import React, { Component } from 'react';
import Book from './Book';

export default class Category extends Component {
  render() {
    const { books, categoryname } = this.props;
    const listOfBooks = books.map(book => (
      <Book
        bookId={book.bookId}
        name={book.name}
        author={book.author}
        detailDescription={book.detailDescription}
      />
    ));
    return (
      <div className="category">
        <ul>{categoryname}</ul>
        <li> {listOfBooks}</li>
      </div>
    );
  }
}
