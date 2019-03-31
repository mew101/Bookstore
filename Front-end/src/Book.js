import React, { Component } from 'react';
import './Book.css';

export default class Book extends Component {
   setName = event => {
    this.props.setname(event.target.value);
  };
  setAuthor = event => {
    this.props.setAuthor(event.target.value);
  };
  setDescription = event => {
    this.props.setDescription(event.target.value);
  };
  render() {
    const { name,  author, detailDescription } = this.props;
    return (
      <div className="book">
        <label>
          Add New Book
          <br />
          Name:
          <input type="text" value={name} onChange={this.setName} />
          Author:
          <input type="text" value={author} onChange={this.setAuthor} />
          Description:
          <input type="text" value={detailDescription} onChange={this.setDescription} />
        </label>
        <br />
        {/* <button onClick={addBook}>Add</button> */}
      </div>
    );
  }
 
  //       <ul key={bookId}>
  //         <li>{name}</li>
  //         <li>{author}</li>
  //         <li>{detailDescription}</li>
  //       </ul>
  //     </div>
  //   );
  // }
}
