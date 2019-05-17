import React, { Component } from "react";
import { connect } from "react-redux";
import { addKeyword } from "../../store/actions/task";

class Search extends Component {
  handleOnClick = () => {
    const keyword = this.refs.search.value;
    this.props.newKeyword(keyword, "string");
  };
  render() {
    return (
      <div className="form-group text-left my-0 d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Tìm kiếm công việc"
          ref="search"
        />
        <button c lassName="btn btn-success" onClick={this.handleOnClick}>
          Tìm
        </button>
      </div>
    );
  }
}

//Add data to Store
const mapDispatchToProps = dispatch => {
  return {
    newKeyword: (keyword, type) => {
      dispatch(addKeyword(keyword, type));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Search);
