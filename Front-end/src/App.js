import React, { Component } from 'react';
import './App.css';
import Category from './Category';
import Book from './Book';
class App extends Component {
  constructor() {
    super();
    this.state = {
      category: [],
      books: []     
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
        <Book 
        addBook={this.addBook} 
        books={this.state.books} 
        />
        
      </div>
    );
  }
}

export default App;
