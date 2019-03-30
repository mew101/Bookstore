import React, { Component } from 'react';
import './App.css';
import Category from './Category';
import Book from './Book';
import Checkout from './Checkout';
class App extends Component {
  constructor() {
    super();
    this.state = {
      Category: ['Romantic', 'Horror', 'Health'],
      books: [
        {
          BookId: 1,
          BookName: 'Dostoevsky ',
          BookAuthor: 'Feodor Dostoevsky',
          Details: 'lorem ipysm amamsdmasjdaskhdb asbhd badk kjsadkj asd'
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <Category />
        <Book books={this.state.books} />
        <Checkout />
      </div>
    );
  }
}

export default App;
