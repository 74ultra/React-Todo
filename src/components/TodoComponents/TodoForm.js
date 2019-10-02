import React from 'react';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newTask: ''
        }
        console.log('TodoForm', props)
    }

    
    handleSubmit = event => {
        event.preventDefault();
        this.props.addTask(this.state.newTask);
        this.setState({ newTask: '' });
    }
    
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state.newTask)
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' 
                           placeholder='enter new task'
                           name='newTask'
                           value={this.state.newTask}
                           onChange={this.handleChange}
                    />
                    <button type='submit'>Add task</button>
                    <button onClick={this.props.clearTask}>Clear completed tasks</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;