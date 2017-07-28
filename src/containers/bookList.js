import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList = () => {
    console.log(this.props.books);
    return this.props.books.map(book => {
      return (
        <li
          onClick={() => this.onBookSelected(book)}
          key={book.title}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  };

  onBookSelected(book) {
    return this.props.selectBook(book);
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

//anthing returned from this function will be props to container
function mapDispatchToProps(dispatch) {
  //when selctbook is called, result shud be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch); // this dispatch functions takes all the actions, funnel and gives them to all reducers
}
// promote bookList from component to container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
