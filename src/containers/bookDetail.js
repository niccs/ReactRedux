import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
class BookDetail extends Component {
  render() {
    return (
      <div>
        <h3>Details For:</h3>
        <div>
          Title:--{" "}
          {this.props.book ? this.props.book.title : "Select a Book first"}
        </div>
        <div>
          Pages:-- {this.props.book ? this.props.book.pages : "0"}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

// promote bookList from component to container
export default connect(mapStateToProps)(BookDetail);
