import React, { Component } from 'react';
import './Book.css';
export default class Book extends Component {
  render() {
    const { books } = this.props;
    const BookList = books.map(book => (
      <ul key={book.BookId}>
        <li>{book.BookId}</li>
        <li>{book.BookName}</li>
        <li>{book.BookAuthor}</li>
        <li>{book.Details}</li>
      </ul>
    ));
    return <div className="book">{BookList}</div>;
  }
}
