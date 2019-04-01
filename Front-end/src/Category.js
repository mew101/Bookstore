import React, { Component } from "react";
import Book from "./Book";
import './Category.css';

 
    export default class Category extends Component {
      render() {
        const { books, categoryname } = this.props;
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
      </div>
    );
   }
}