import React, { Component } from 'react';
import './Book.css';

export default class Book extends Component {
  deleteBook = () => {
    fetch(`https://localhost:44353/api/Book/${this.props.bookId}`, {
      method: 'DELETE'
    });
  };
  render() {
    const { bookId, name, detailDescription, author } = this.props;

    return (
      <div className="book">
        <h3>{name}</h3>
        <p>{author}</p>
        <p>{detailDescription}</p>
        <button onClick={this.deleteBook}>Delete</button>
      </div>
    );
  }
}
