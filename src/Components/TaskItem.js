import React, { Component } from 'react';

class TaskItem extends Component{
    render(){
        let {index,task}= this.props
        return(
         
                <tr>
                                          <td>{index}</td>
                                            <td>{task.name}</td>
                                            <td className="text-center">
                                                <span className={task.status===true?'label label-danger' :
                                            'label label-success'}>{task.status===true?'Kích hoạt':'Ẩn'}</span>
                                            </td>
                                            <td className="text-center">
                                                <button type="button" className="btn btn-warning">
                                                        <span className="fa fa-pencil mr5"></span>Sửa
                                                </button>
                                                &nbsp;  
                                                <button type="button" className="btn btn-danger">
                                                        <span className="fa fa-trash mr5"></span>Xóa
                                                </button>
                                                
                                            </td>
                                          </tr>
            
        )
    }
}
export default TaskItem;