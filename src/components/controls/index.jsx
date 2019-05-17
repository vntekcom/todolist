import React, { Component } from "react";
import Label from "../labels";
import Priority from "../priority";
import Sort from "../sort";
class index extends Component {
  render() {
    return (
      <div className="col-md-3 text-center px-0">
        <div className="header header--left d-flex align-items-center">
          <img src="./img/user_1.jpg" className="ml-2 user" alt />
          <h3 className="text-white d-inline font-weight-light ml-2">
            CyberSoft
          </h3>
        </div>
        <button
          type="button"
          className="btn my-3 btn--newTask"
          data-toggle="modal"
          data-target="#modalTask"
        >
          <i className="fa fa-pencil-square-o" />
          Tạo Task mới
        </button>
        {/* Filter */}
        <div className="px-3">
          <Label />
          <Priority />
          <Sort />
        </div>
      </div>
    );
  }
}

export default index;
