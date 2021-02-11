import React from 'react';
import { TodoList } from './TodoList';
import './TodoApp.css';
export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], text: '', priority: null, dueDate: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <>
        <h1 className="">TodoApp</h1>
        <hr />
        <div className="row">
          <div className="col-7">
            <form onSubmit={this.handleSubmit}>
              <input
                id="text"
                name="text"
                type="text"
                className="form-control"
                placeholder="What needs to be done?"
                onChange={this.handleChange}
                value={this.state.text}
              />
              <input
                id="priority"
                name="priority"
                className="form-control"
                placeholder="Priority"
                type="number"
                onChange={this.handleChange}
                value={this.state.priority}
              />

              <input
                id="dueDate"
                name="dueDate"
                className="form-control"
                placeholder="Due date"
                type="date"
                onChange={this.handleChange}
                value={this.state.dueDate}
              />
              <button type="submit" onClick={this.handleSubmit} className="btn m-1 btn-block btn-outline-primary">
                Add #{this.state.todos.length + 1}
              </button>
            </form>
          </div>
          <div className="col-5">
            {
              (
                this.state.todos.length ?
                  <TodoList todoList={this.state.todos} />
                  :
                  <p>Nothing to be done.</p>
              )

            }
          </div>

        </div>
      </>
    );
  }
  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { text, priority, dueDate } = this.state;
    if (!text.length || priority===null || dueDate===null ) {
      return;
    }
    const newTodo = {
      text,
      priority,
      dueDate
    }
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo],
      text: '',
      priority: null,
      dueDate: null
    }));
  }
}