import React, { Component } from "react";

class searchBox extends Component {
  render() {
    // const { onSearchChange } = this.props;

    return (
      <div>
        <input
          className={this.props.className}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        ></input>
      </div>
    );
  }
}

export default searchBox;
