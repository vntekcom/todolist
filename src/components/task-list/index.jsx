import React, { Component } from "react";
import { connect } from "react-redux";
import TaskItem from "../task-item";
import Search from "../search";

class TaskList extends Component {
  // Ham tìm kiếm
  filterData = () => {
    const { filterType, filterStr } = this.props.filter;
    if (filterType) {
      switch (filterType) {
        case "string":
          return this.props.taskList.filter(task => {
            //trả về mảng có item là true
            for (let key in task) {
              if (task[key].toString().search(filterStr) !== -1) {
                return true;
              }
            }
            return false;
          });
        case "priority":
          return this.props.taskList.filter(task => {
            //trả về mảng có item là true
            for (let key in task) {
              if (task[key].toString().search(filterStr) !== -1) {
                return true;
              }
            }
            return false;
          });
      }
    }
    return this.props.taskList;
  };

  renderTaskItem = () => {
    return this.filterData().map((task, i) => {
      return <TaskItem task={task} key={i} />;
    });
  };

  render() {
    return (
      <div className="col-md-9 px-0">
        <div className="container-fluid px-0">
          <div className="row header header--right d-flex align-items-center mx-0">
            <div className="col-md-6">
              <div className=" d-flex justify-content-between">
                <h3 className="text-left ml-2 ">Danh sách công việc</h3>
              </div>
            </div>
            <div className="col-md-6">
              <Search />
            </div>
          </div>
        </div>
        <div className="px-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Công việc</th>
                <th className="text-center">Độ ưu tiên</th>
                <th className="text-center">Tình trạng</th>
              </tr>
            </thead>
            <tbody>{this.renderTaskItem()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

// Load data form Store
const mapStateToProps = state => {
  return {
    taskList: state.taskArr,
    filter: state.filter
  };
};

export default connect(
  mapStateToProps,
  null
)(TaskList);
