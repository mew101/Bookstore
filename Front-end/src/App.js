import React, { Component } from 'react';
import './App.css';
import Category from './Category';
import Book from './Book';
import Checkout from './Checkout';
class App extends Component {
  constructor() {
    super();
    this.state = {
      category: [
        { CategoryId: 1, CategoryName: 'Romantic' },
        { CategoryId: 2, CategoryName: 'Horror' },
        { CategoryId: 3, CategoryName: 'Health' }
      ],
      books: [
        {
          BookId: 1,
          BookName: 'Dostoevsky ',
          Author: 'Feodor Dostoevsky',
          ImagePath: '',
          Details: 'lorem ipysm amamsdmasjdaskhdb asbhd badk kjsadkj asd'
        },
        {
          BookId: 2,
          BookName: 'How to Sell Houses Fast',
          BookAuthor: 'Mo Weis',
          ImagePath: '',
          Details:
            'lorem ipysm amamsdmasjdaskhdb asbhd badk kjsadkj asd ilianois CHiacago'
        }
      ]
    };
  }
  addBook = book => {
    //const books = { ...this.state.book };
  };
  addCategory = category => {
    //addsCategory
  };
  componentDidMount() {
    fetch('https://localhost:44353/api/Category')
      .then(res => res.json())
      .then(json => this.setState({ category: json }));
  }
  render() {
    return (
      <div className="App">
        <Category
          addCategory={this.addCategory}
          category={this.state.category}
        />
        <Book addBook={this.addBook} books={this.state.books} />
        <Checkout />
      </div>
    );
  }
}

export default App;
