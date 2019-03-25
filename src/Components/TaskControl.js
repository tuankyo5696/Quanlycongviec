import React, { Component } from 'react';
import TaskSearch from './TaskSearchControl';
import TaskSort from './TaskSortControl';
class TaskControl extends Component {
  render() {
    return (
    
                        <div className="row mt-15">   
                            {/* <!-- Search --> */}
                           <TaskSearch/>    
                            {/* <!-- Sort --> */}
                           <TaskSort/>
                        </div>
                    

    );
  }
}

export default TaskControl;
