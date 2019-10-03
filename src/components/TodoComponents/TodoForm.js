import React from 'react';

import './Todo.css';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newTask: ''
        }
        
    }

    
    handleSubmit = event => {
        event.preventDefault();
        this.props.addTask(this.state.newTask);
        this.setState({ newTask: '' });
    }
    
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
        
    }
    
    render(){
        return (
          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="enter new task"
                name="newTask"
                value={this.state.newTask}
                onChange={this.handleChange}
              />
              <div className='btn-wrapper'>
                <button className="btn" type="submit">
                  Add task
                </button>
                <button className="btn" onClick={this.props.clearTask}>
                  Clear completed tasks
                </button>
              </div>
            </form>
          </div>
        );
    }
}

export default TodoForm;