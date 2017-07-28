import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    //  this.onInputChange = this.onInputChange.bind(this);
  }
  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          className="form-control"
          placeholder="Enter the city name"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
  onFormSubmit = event => {
    event.preventDefault();
    //call the action creator
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  };
  onInputChange = event => {
    this.setState({ term: event.target.value });
    //this.props.onSearchTermChange(this.state.term);
  };
}
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

//anthing returned from this function will be props to container
function mapDispatchToProps(dispatch) {
  //when fetchWeather is called, result shud be passed to all reducers
  return bindActionCreators({ fetchWeather: fetchWeather }, dispatch); // this dispatch functions takes all the actions, funnel and gives them to all reducers
}
// promote SearchBar from component to container
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
