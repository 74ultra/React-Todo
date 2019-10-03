import React from 'react';

import data from './data.js';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super()
    this.state = {
      todos: data
    }
  }

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if(id === item.id){
          return {...item, completed: !item.completed};
        } else {
          return item;
        }
      })
    })

  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => {
        return !item.completed
      })
    })
  }
  
  addTask = task => {
    this.setState({
      todos: [...this.state.todos, {
        task: task,
        id: Date.now(),
        completed: false
      }]
    });
  }
  
  render() {
    return (
      <div className='main'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} 
                  clearTask={this.clearCompleted}
        />
        <TodoList todos={this.state.todos} 
                  toggleComplete={this.toggleComplete}
        />
        
      </div>
    );
  }
}

export default App;
