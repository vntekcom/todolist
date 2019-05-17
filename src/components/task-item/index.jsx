import React, { Component } from "react";
import { connect } from "react-redux";
import { delTask, editTask } from "../../store/actions/task";

class TaskItem extends Component {
  handleDelete = () => {
    this.props.delTask(this.props.id);
  };

  render() {
    const { id, name, priority, status } = this.props.task;

    return (
      <tr>
        <td className="text-center">{id}</td>
        <td className="text-center">{name}</td>

        <td className="text-danger font-weight-bold text-center">{priority}</td>

        <td>
          <button
            className="btn"
            onClick={()=>{
                this.props.setEditTask(this.props.task)
            }}
            data-toggle="modal"
            data-target="#modalTask"
          >
            Sửa
          </button>
          <button className="btn" onClick={this.handleDelete}>
            Xoá
          </button>
        </td>

        <td className="text-center">
          {/* <i className="fa fa-check-square-o mr-2" /> */}
          {status}
        </td>
      </tr>
    );
  }
}

//Add data to Store
const mapDispatchToProps = dispatch => {
  return {
    delTask: task => {
      dispatch(delTask(task));
    },
    setEditTask: (task) =>{
        dispatch(editTask(task))
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(TaskItem);
