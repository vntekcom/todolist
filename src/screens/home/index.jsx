import React, { Component } from 'react';
import Controls from '../../components/controls';
import TaskList from '../../components/task-list';
import AddTask from '../../components/add-task';
class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
                <div className="container-fluid">
                    <div className="row">
                        {/* PANEL */}
                        <Controls />
                        <TaskList />
                    </div>
                </div>
                {/* The Modal */}
                <AddTask />
            </div>

        );
    }
}

export default Home;