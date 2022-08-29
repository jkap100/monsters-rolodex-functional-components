import React, { Component } from "react";

import "./searchBox.styles.css";

class searchBox extends Component {
  render() {
    return (
      <div>
        <input
          className={`search-box ${this.props.className}`}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        ></input>
      </div>
    );
  }
}

export default searchBox;
