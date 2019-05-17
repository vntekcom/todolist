import React, { Component } from "react";
import { connect } from "react-redux";
import { addKeyword } from "../../store/actions/task";

class Priority extends Component {
  handelOnChange = event => {
    const keyword = this.refs.priority.value;
    this.props.newKeyword(keyword, "priority");
  };

  render() {
    return (
      <div className="form-group text-left">
        <label htmlFor="sel1">Độ ưu tiên</label>
        <select
          className="form-control"
          onChange={this.handelOnChange}
          ref="priority"
        >
          <option className="font-weight-bold">Tất cả</option>
          <option className="text-info font-weight-bold" value={1}>
            Thấp
          </option>
          <option className="text-success font-weight-bold" value={2}>
            Trung bình
          </option>
          <option className="text-danger font-weight-bold" value={3}>
            Cao
          </option>
        </select>
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
)(Priority);
