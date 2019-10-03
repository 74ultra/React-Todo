import React from 'react';

import './Todo.css';

class Todo extends React.Component {
    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <p onClick={() => this.props.toggleComplete(this.props.todo.id)}
                 className={this.props.todo.completed ? 'completed' : ""}>
                 {this.props.todo.task}</p>
        )
    }
}

export default Todo;