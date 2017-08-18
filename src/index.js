import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./components/app";
import LoginForm from "./containers/loginForm";
import reducers from "./reducers";
import logger from "redux-logger";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, ReduxPromise)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/sensors" component={App} />
          <Route path="/" component={LoginForm} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
