import React, { Component } from 'react';
import './App.css';
// import Category from './Category';
import Book from './Book';
class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      books: [] , 
      name: "",
      author: "",
      detailDescription: "", 
    };
  }

  componentDidMount() {
    fetch('https://localhost:44353/api/Category')
      .then(res => res.json())
      .then(json => this.setState({ categories: json }));
  }
  // 
   setName = text => {
    this.setState({ name: text });
  };

   setAuthor = text => {
    this.setState({ author: text });
  };

  setdetailDescription = text => {
    this.setState({ detailDescription: text });
  };

  
  addBook = () => {
    const book = {
      maker: this.state.name,
      model: this.state.author,
      type: this.state.detailDescription
    };
    fetch("https://localhost:44384/api/pedal", {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json"
      }
    })
     .then(res => {
        if (res.ok) {
          const newBookList = [...this.state.allBooks, book];
          this.setState({ allBooks: newBookList });
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  render() {
     return(
     
    // const bookList =this.state.books.map(categories =>(
            <Book
              name={this.state.name}
              author={this.state.author}
              detailDescription={this.state.detailDescription}
              setName={this.setName}
              setAuthor={this.setAuthor}
              setdetailDescription={this.setdetailDescription}
              addBook={this.addBook}
            />
    
    );
   
  }
   
// }  <div className="App">{listOfCategory}</div>;
}

export default App;
