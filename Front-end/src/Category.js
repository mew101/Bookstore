import React, { Component } from 'react';
import './Category.css';

class Category extends Component {
  render() {
    const { books, categoryname } = this.props;
    const listOfBooks = books.map(item => (
    
       <ul>
        name={item.name}
        author={item.author}
        detailDescription={item.detailDescription}
      </ul>
    ));
    return(
        <ul> {listOfBooks}</ul>
    );
  }
}
export default Category;