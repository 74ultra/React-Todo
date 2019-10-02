import React from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component {
    constructor(props){
        super(props);
        console.log('TodoList', props)
    }

    render(){
        return(
            <div>
                <div>
                    {this.props.todos.map(item => {
                        return <Todo key={item.id} 
                                     todo={item}
                                     toggleComplete={this.props.toggleComplete}
                        />
                        })}
                </div>
                

            </div>
            
        )
    }
}

export default TodoList;
