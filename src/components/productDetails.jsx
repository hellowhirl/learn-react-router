import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
    // push() will add new address in the browswer history so you can go to previous page
    this.props.history.push("/products");
    // replace() replaces current address so we won't have in history
    // when we don't want the browser to record this invalid url the user has visited
    this.props.history.replace("/products");
  };

  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id} </h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
