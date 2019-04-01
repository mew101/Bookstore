import React, { Component } from 'react';
import './Book.css';

export default class Book extends Component {
  deleteBook = () => {
    fetch(`https://localhost:44353/api/Book/${this.props.bookId}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          console.log('Deleting  Book');
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  render() {
    const { name, detailDescription, author } = this.props;

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
