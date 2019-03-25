import React, { Component } from 'react';

import './App.css';
import './Components/TaskForm';
import TaskForm from './Components/TaskForm';
import TaskControl from './Components/TaskControl';
import TaskList from './Components/TaskList';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [], // id, name, status,
      isDisplayForm: false
    }
    }
  componentWillMount(){
    if(localStorage && localStorage.getItem('tasks')){
      let tasks= JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      })
    }
  }
  onGenerataData=()=>{
      let tasks=[
        {
          id: this.generateID() ,
          name: 'Học lập trình',
          status: true
        },
        {
          id: this.generateID(),
          name: 'Đi bơi',
          status: true
        },
        {
          id: this.generateID(),
          name: 'Đi ngủ',
          status: false
        }
      ]
      this.setState({
        tasks : tasks
      })
      localStorage.setItem('tasks',JSON.stringify(tasks));
  }
  s4(){
    return Math.floor((1+Math.random()*0x10000)).toString(16).substring(1); // random ÍD
  }
  generateID(){
    return this.s4()+ this.s4() + this.s4() + '-' + this.s4() + '-'+ this.s4()+'-'+ this.s4()+'-'+ this.s4()+ '-'+ this.s4()
  }
  onToggleForm =() =>{
      this.setState({
        isDisplayForm: !this.state.isDisplayForm
      })
  }
  onCloseForm =() =>{
    this.setState({
      isDisplayForm: false
    })
  }
  onSubmit = (data)=>{
    let {tasks} =this.state;
    data.id = this.generateID()
    tasks.push(data)
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }
  render() {
    let {tasks,isDisplayForm}= this.state;
    let elmTaskForm = isDisplayForm
          ? <TaskForm onSubmit ={this.onSubmit} 
                      onCloseForm={this.onCloseForm}/> 
          :''
    return (
     
        <div className="container">
            <div className="text-center">
                <h1>Quản lý công việc</h1>
            </div>
            
            <div className="row">
                <div className={isDisplayForm? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                    {elmTaskForm}
                </div>
                <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                    <button type="button"
                           className="btn btn-primary"
                           onClick = {this.onToggleForm}
                           >
                        <span className="fa fa-plus mr-5"></span>Thêm công việc
                    </button>
                    <button type="button" 
                            className="btn btn-danger ml-5"
                            onClick={this.onGenerataData}
                            >
                          Generate Data
                    </button>
                        {/* {<!-- { Search-Sort} -->} */}
                              <TaskControl/>
                        {/* <!-- List --> */}
                              <TaskList
                                tasks = {tasks}
                              />
                </div>
                
            </div>
            
        </div>
        
      
    
    );
  }
}

export default App;
