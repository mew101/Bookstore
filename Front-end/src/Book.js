import React, { Component } from 'react';

export default class Book extends Component {
  render() {
    const { bookId, name, detailDescription, author } = this.props;

    return (
      <div className="book">
        <ul key={bookId}>
          <li>{name}</li>
          <li>{author}</li>
          <li>{detailDescription}</li>
        </ul>
      </div>
    );
  }
}
