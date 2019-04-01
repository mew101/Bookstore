import React, { Component } from "react";
import './Book.css';

export default class Book extends Component {
  render() {
    const { bookId, name, detailDescription, author } = this.props;

    return (
      <div className="book">
       <h3>{name}</h3>
        <p>{author}</p>
        <p>{detailDescription}</p>
      </div>
    );
  }
}