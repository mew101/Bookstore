import React, { Component } from 'react';
import './App.css';
import Category from './Category';
import Book from './Book';
class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      books: [
       
      ]
    };
  }

  componentDidMount() {
    fetch('https://localhost:44353/api/Category')
      .then(res => res.json())
      .then(json => this.setState({ categories: json }));
  }
  addBook = () => {
    alert('Adding Book');
  };
  addCategory = () => {
    alert('adding a category');
  };

  render() {
    const listOfCategory = this.state.categories.map(item => (
      <Category books={item.books} categoryname={item.categoryName} />
    ));
    return <div className="App">{listOfCategory}</div>;
  }
}

export default App;