import React, { Component } from 'react';
import Book from './Book';
import './Category.css';

export default class Category extends Component {
  saveBook = () => {
    this.props.addNewBook(this.props.categoryId);
  };
  onBookName = event => {
    this.props.setBookName(event.target.value);
  };
  onAuthor = event => {
    this.props.setAuthor(event.target.value);
  };
  ondetailDescription = event => {
    this.props.setdetailDescription(event.target.value);
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
        <input
          className={this.props.categoryId}
          value={name}
          type="text"
          onChange={this.onBookName}
        />
        <input
          className={this.props.categoryId}
          value={author}
          type="text"
          onChange={this.onAuthor}
        />
        <input
          value={detailDescription}
          type="text"
          onChange={this.ondetailDescription}
        />
        <button onClick={this.saveBook}>Add Book</button>
      </div>
    );
  }
}
