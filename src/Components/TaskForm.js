import React, { Component } from 'react';
class TaskForm extends Component{
   constructor(props){
       super(props)
       this.state ={
           name: '',
           status: false
       }
   }
    onCloseForm = () =>{
       this.props.onCloseForm()
   } 
   onChange =(event) =>{
       let target= event.target;
       let name = target.name;
       let value = target.value;
       if( name === 'status'){
           value = target.value ==='true' ? true : false
       }
       this.setState({
           [name]: value
       })
   }
   onSubmit = (event) =>{
       event.preventDefault();
       this.props.onSubmit(this.state);
   }
    render(){
        
        return (
            <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">Thêm công việc</h3>
                <span className="fa fa-times-circle text-right" onClick={this.onCloseForm}></span>
            </div>
            <div className="panel-body">
                {/* {<!-- form -->} */}
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label>Tên</label>
                        <input type="text" 
                                className="form-control" 
                                name="name"
                                value= {this.state.name}
                                onChange= {this.onChange}
                                />
                    </div>
                        <label >Trạng thái: </label>
                        <select name="status" 
                                id="input" 
                                className="form-control" 
                                value = {this.state.status}
                                onChange={this.onChange}
                                >
                            <option value={true}>Kích hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select><br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">
                            <span className="fa fa-plus mr-5"></span>Lưu lại
                        </button>&nbsp;
                        
                        <button type="button" className="btn btn-danger">
                            <span className="fa fa-close mr-5"></span>Hủy bỏ
                        </button>
                    </div>
                </form>
                
                </div>
                </div>
        );
    }
}
export default TaskForm
