import React, { Component } from "react";
import { connect } from "react-redux";
import { addKeyword } from "../../store/actions/task";

class Labels extends Component {
  handleOnClick = () => {
    const keyword = this.refs.li.value;
    this.props.newKeyword(keyword, "label");
  };
  render() {
    return (
      <div className="filter filter--label">
        <ul className="list-unstyled text-left" onClick={this.handleOnClick}>
          Nhãn
          <li className="py-1 display-5 lead" ref="label" value="Frontend">
            <i className="fa fa-circle mr-2" />
            Frontend
          </li>
          <li className="py-1 display-5 lead" ref="label">
            <i className="fa fa-circle mr-2" />
            Backend
          </li>
          <li className="py-1 display-5 lead" ref="label">
            <i className="fa fa-circle mr-2" />
            API
          </li>
          <li className="py-1 display-5 lead" ref="label">
            <i className="fa fa-circle mr-2" />
            Issue
          </li>
        </ul>
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
)(Labels);
