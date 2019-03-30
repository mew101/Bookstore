import React, { Component } from 'react';
import './Category.css';
export default class Category extends Component {
  render() {
    const { category } = this.props;
    const categoryOptions = category.map(category => (
      <ul key={category.categoryId}>
        <li>{category.CategoryName}</li>
      </ul>
    ));
    return (
      <div className="category">
        <h1>{categoryOptions}</h1>
      </div>
    );
  }
}
