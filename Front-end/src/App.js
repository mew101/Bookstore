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
      Book: [
        {
          BookId: 1,
          BookName: 'Book Name',
          BookAuthor: 'Mo Weis',
          Details: 'lorem ipysm amamsdmasjdaskhdb asbhd badk kjsadkj asd'
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <Category />
        <Book />
        <Checkout />
      </div>
    );
  }
}

export default App;
