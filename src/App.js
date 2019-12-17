import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          {/* the Switch will render the first child that matches the location */}
          <Switch>
            {/* define paramters by prefixing with ':' in 'path' */}
            <Route path="/products/:id" component={ProductDetails} />
            <Route
              path="/products"
              render={props => <Products sortBy="newest" {...props} />}
            />
            {/* '?' mean that parameter is optional */}
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" component={Home} />
            {/* another way besides <Switch> is to set the home page with '/' is to use 'exact'
            /* <Route path="/" exact component={Home} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
