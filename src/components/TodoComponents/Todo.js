import React from 'react';

import './Todo.css';

class Todo extends React.Component {
    constructor(props){
        super(props);
        console.log('Todo.js', props);
    }

    render(){
        return(
            <div onClick={() => this.props.toggleComplete(this.props.todo.id)}
                 className={this.props.todo.completed ? 'completed' : ""}>
                 {this.props.todo.task}</div>
        )
    }
}

export default Todo;