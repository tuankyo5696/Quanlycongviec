import React, { Component } from 'react';
import TaskItem from './TaskItem';
class App extends Component {
  render() {
    let {tasks} = this.props
    let elmtasks = tasks.map((task,index)=>{
            return <TaskItem key={task.id}
                             index={index}
                             task ={task}

            />
    })
    return (
        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th className="text-center">STT</th>
                                            <th className="text-center">Tên</th>
                                            <th className="text-center">Trạng thái</th>
                                            <th className="text-center">Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <input 
                                                    type="text" 
                                                    name="filterName" 
                                                    className="form-control" 
                                                />
                                            </td>
                                            <td>
                                                
                                                <select name="filterStatus" 
                                                        className="form-control"
                                                >
                                                    <option value="-1">Tất cả</option>
                                                    <option value="0">Ẩn</option>
                                                    <option value="1">Kích hoạt</option>
                                                </select>
                                                
                                            </td>
                                            <td></td>
                                        </tr>
                                    {elmtasks}
                                    </tbody>
                                </table>
                                
                            </div>
                        </div>
                        
                        
                
            
    );
  }
}

export default App;
