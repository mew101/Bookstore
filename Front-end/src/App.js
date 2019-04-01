import React, { Component } from 'react';
import './App.css';
import Category from './Category';

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      name: '',
      author: '',
      detailDescription: '',
      categoryId: ''
    };
  }

  componentDidMount() {
    fetch('https://localhost:44353/api/Category')
      .then(res => res.json())
      .then(json => this.setState({ categories: json }));
  }
  addBook = categoryId => {
    const createBook = {
      name: this.state.name,
      author: this.state.author,
      detailDescription: this.state.detailDescription,
      categoryId: this.state.categoryId
    };
    fetch('https://localhost:44353/api/book', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(createBook)
    })
    .then(res => {
      if (res.ok) {
        const bookCategoryIndex = categoryId - 1;
        const newBook = [...this.state.categories[bookCategoryIndex].books, createBook];
        const updatedCategory = this.state.categories[bookCategoryIndex];
        updatedCategory.books = newBook;
        const newCategories = this.state.categories;
        newCategories[bookCategoryIndex] = updatedCategory;

        this.setState({ categories: newCategories });
      }
    });
 
  }
  render() {
    const listOfCategory = this.state.categories.map(item => (
      <Category
        books={item.books}
        categoryname={item.categoryName}
        categoryId={item.categoryId}
        addNewBook={this.addBook}
      />
    ));
    return <div className="App">{listOfCategory}</div>;
  }
}

export default App;
