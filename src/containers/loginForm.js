import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { postLoginData } from "../actions/index";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

class LoginForm extends Component {
  renderField(field) {
    const className1 = `form-group ${field.meta.touched && field.meta.error
      ? "has-danger"
      : ""}`;
    return (
      <div className={className1}>
        <label>
          {field.label}
        </label>
        <input
          className="form-control"
          type={field.fieldType}
          {...field.input}
        />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ""}
        </div>
      </div>
    );
  }
  onSubmit = values => {
    this.props.history.push("/sensors");
    // this.props.postLoginData(values);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="class-xs-right">
          <Link className="btn btn-primary" to="/sensors">
            Check Sensors graph
          </Link>
        </div>
        <h3>Login Form</h3>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            label="USER NAME"
            fieldType="text"
            name="userName"
            component={this.renderField}
          />
          <Field
            label="PASSWORD"
            fieldType="password"
            name="password"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <Link className="btn btn-danger" to="/">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  //validate the inputs

  if (!values.userName) {
    errors.userName = "Enter a user name";
  }
  if (!values.password) {
    errors.password = "Password cant be empty";
  }
  //if errors is empty, form is fine to submit
  return errors;
}

export default reduxForm({
  validate,
  form: "LoginForm"
})(connect(null, { postLoginData })(LoginForm));
