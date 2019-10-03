import React from 'react';
import Todo from './Todo.js';

import './Todo.css';

class TodoList extends React.Component {
    constructor(props){
        super(props);
    
    }

    render(){
        return(
            <div>
                <div className='list'>
                    {this.props.todos.map(item => {
                        return (
                          <div className="task" key={item.id}>
                            <Todo
                              key={item.id}
                              todo={item}
                              toggleComplete={this.props.toggleComplete}
                              
                            />
                          </div>
                        );
                        
                        })}
                </div>
                

            </div>
            
        )
    }
}

export default TodoList;
