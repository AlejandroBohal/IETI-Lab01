import React from 'react';
import {TodoList} from './TodoList';

export class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { todos: [], text: '', priority:0, dueDate:new Date()};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <>
          <h3>TODO</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="text">
              What needs to be done?
            </label>
            <input
              id="text"
              name="text" 
              type="text"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <label htmlFor="priority">
              Priority
            </label>
            <input
              id="priority"
              name="priority" 
              type="number"
              onChange={this.handleChange}
              value={this.state.priority}
            />
            <label htmlFor="dueDate">
              DueDate
            </label>
            <input
              id="dueDate"
              name="dueDate" 
              type="date"
              onChange={this.handleChange}
              value={this.state.dueDate}
            />
            <button type="submit" onClick={this.handleSubmit}>
              Add #{this.state.todos.length + 1}
            </button>
          </form>
          {
            (
              this.state.todos.length ?
                <TodoList todoList={this.state.todos}/>
              :
              <p>Nothing to be done.</p>
            )
            
          }
          
        </>
      );
    } 
    handleChange({target}) {
      this.setState({ [target.name]: target.value });
    }

    handleSubmit(e) {
      e.preventDefault();
      const {text,priority,dueDate} = this.state;
      if (!this.state.text.length) {
        return;
      }
      const newTodo = {
        text,
        priority,
        dueDate
      }
      this.setState(prevState => ({
        todos: [...prevState.todos,newTodo],
        text: '',
        priority: 0,
        dueDate: new Date()
      }));
    }
  }