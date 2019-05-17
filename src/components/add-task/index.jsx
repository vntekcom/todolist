import React, { Component } from "react";
import { connect } from "react-redux";
import { accAddTtask } from "../../store/actions/task";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.random(),
      name: "",
      priority: 3
    };
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.editTask).length > 0) {
      this.setState({
        id: nextProps.editTask.id,
        name: nextProps.editTask.name,
        priority: nextProps.editTask.priority
      });
    }
  }

  handelOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addNewTask(this.state);
  };

  render() {
    return (
      <div className="modal fade" id="modalTask">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Thêm công việc</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>

            {/* Modal body */}
            <form onSubmit={this.handleOnSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="taskName">Tên công việc:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={this.handelOnChange}
                    value={this.state.name}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="priority">Độ ưu tiên:</label>
                  <select
                    className="form-control"
                    name="priority"
                    onChange={this.handelOnChange}
                    value={this.state.priority}
                  >
                    <option value={-1} selected>
                      Select
                    </option>
                    <option value="1">Thấp</option>
                    <option value="2">Trung bình</option>
                    <option value="3">Cao</option>
                  </select>
                </div>
                <label htmlFor>Người thực hiện:</label>
              </div>

              {/* Modal footer */}
              <div className="modal-footer">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// Load data form Store
const mapStateToProps = state => {
  return {
    editTask: state.editTask
  };
};

//Add data to Store
const mapDispatchToProps = dispatch => {
  return {
    addNewTask: newTask => {
      dispatch(accAddTtask(newTask));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTask);
